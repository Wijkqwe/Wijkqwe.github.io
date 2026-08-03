# Arch in VirtualBox

## 安装VirtualBox

- https://www.virtualbox.org/wiki/Downloads
- https://mirrors.tuna.tsinghua.edu.cn/help/virtualbox/
- https://mirrors.hit.edu.cn/virtualbox/


## 新建虚拟机

## 配置虚拟机
1. 进入“设置->Expert->系统->扩展特性->启动EFI”
1. 显示->显存大小->128MB
1. 启动虚拟机，加载虚拟光盘


## 连接网络

### 无线网络
`iwctl`命令

`ping`检测


## 禁用服务

### 禁用reflector服务

禁用服务
```bash
systemctl stop reflector.service
systemctl disable reflector.service
```
查看该服务
```bash
systemctl status reflector.service
```
`q`键退出

### 禁用蜂鸣器
```sh
rmmod pcspkr
echo "blacklist pcspkr" >> /etc/modprobe.d/blacklist.conf
```

## 更新系统时钟
```sh
timedatectl set-ntp true
timedatectl status
```


## 更换软件仓库镜像源
```bash
vim /etc/pacman.d/mirrorlist
```
```
Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch # 中国科学技术大学开源镜像站
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch # 清华大学开源软件镜像站
Server = https://repo.huaweicloud.com/archlinux/$repo/os/$arch # 华为开源镜像站
Server = http://mirror.lzu.edu.cn/archlinux/$repo/os/$arch # 兰州大学开源镜像站
```

## 分区

查看
```bash
lsblk
fdisk -l
```

图形化分区
```sh
cfdisk /dev/sda
```
- `New`选项新建分区
- `Type`选项选择类型
- 完成后`Write`选项写入，输入yes
- `Quit`选项退出


## 格式化

### EFI分区FAT32格式

> 若多系统则第二个开始无需格式化EFI
```sh
mkfs.fat -F32 /dev/sda1
```
> vfat是fat的扩展，支持长文件名


### Swap分区

```bash
mkswap /dev/sda2
```

### ext4

`/` and `/usr`
```bash
mkfs.ext4 -L Arch /dev/sda3
mkfs.ext4 -L usr /dev/sda4
```
> `-L`指定该分区LABLE


### btrfs

`/data`
```bash
mkfs.btrfs -L data /dev/sda5
```

#### 创建子卷(若/为btrfs)
```bash
mount -t btrfs -o compress=zstd /dev/sdxn /mnt
df -h
btrfs subvolume create /mnt/@ # 创建 / 目录子卷
btrfs subvolume create /mnt/@home # 创建 /home 目录子卷
btrfs subvolume list -p /mnt # 复查子卷情况
umount /mnt
```


## 挂载分区
```bash
mount /dev/sda3 /mnt #: 先挂载/
mkdir -p /mnt/usr
mount /dev/sda4 /mnt/usr
mkdir -p /mnt/data
mount /dev/sda5 /mnt/data
mkdir -p /mnt/boot
mount /dev/sda1 /mnt/boot
swapon /dev/sda2
```
查看
```bash
free -h
df -h
```


## 安装系统

若GPG证书错误，则不是最新镜像文件
```bash
pacman -S archlinux-keyring
```
安装基础包
```bash
pacstrap /mnt base base-devel linux linux-firmware
```
安装必要工具
```sh
pacstrap /mnt networkmanager vim sudo bash bash-completion
```


## 生成fstab文件
```sh
genfstab -U /mnt > /mnt/etc/fstab
cat /mnt/etc/fstab
```


## 切换工作区域
```sh
arch-chroot /mnt
```


## 修改主机名
```sh
vim /etc/hostname
```
```sh
vim /etc/hosts
```
添加
```
127.0.0.1 localhost
::1 localhost
127.0.1.1 Arch.localdomain Arch
```
`Arch.localdomain Arch`中`Arch`为主机名


## 设置时区
```sh
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
hwclock --systohc #: 同步到硬件时间
```


## 设置地区偏好
```sh
vim /etc/locale.gen
```
去掉`en_US.UTF-8 UTF-8`及`zh_CN.UTF-8 UTF-8`行前注释符号`#`
生成`locale`
```sh
locale-gen
echo 'LANG=en_US.UTF-8'  > /etc/locale.conf
```


## 为root设置密码
```sh
passwd root
```


## 安装微码
```sh
pacman -S intel-ucode # Intel
```


## 安装引导程序

### 安装包

```sh
pacman -S grub efibootmgr os-prober
```
* `-S` 选项后指定要通过 `pacman` 包管理器安装的包：
    * `grub` —— 启动引导器
    * `efibootmgr` —— `efibootmgr` 被 `grub` 脚本用来将启动项写入 NVRAM
    * `os-prober` —— 为了能够引导 win10，需要安装 `os-prober` 以检测到它

### 安装GRUB到EFI分区

```sh
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=ARCH
```
* `--efi-directory=/boot` —— 将 `grubx64.efi` 安装到之前的指定位置（EFI 分区）
* `--bootloader-id=ARCH` —— 取名为 `ARCH`

### 编辑`grub`

```sh
vim /etc/default/grub
```
* 去掉 `GRUB_CMDLINE_LINUX_DEFAULT` 一行中最后的 `quiet` 参数
* 把 `loglevel` 的数值从 `3` 改成 `5`。这样是为了后续如果出现系统错误，方便排错
* 加入 `nowatchdog` 参数，这可以显著提高开关机速度
* 为了引导 win10，则还需要添加新的一行 `GRUB_DISABLE_OS_PROBER=false`

### 生成`GRUB`配置文件
```sh
grub-mkconfig -o /boot/grub/grub.cfg
```


## 解决`/usr`单独分区的问题
打开`/etc/mkinitcpio.conf`文件，找到`HOOK`一行，在后面加上`fsck` `usr` `shutdown`
之后
```sh
mkinitcpio -p linux
```
打开文件`/etc/fstab`修改`/usr`分区对应passno为0(passno即末尾最后的数字)


## 完成安装

### 重启
```sh
exit
umount -R /mnt
reboot
```
重启前退出引导程序或与CD文件断开连接，虚拟机直接重启即可

#### `but /sbin/init does not exist`

若之前未解决`/usr`单独分区问题，则会出现
```
Root device mounted successfully, but /sbin/init does not exist
```
进行排查，首先排查new_root下的目录结构是否类似根的目录结构
```sh
ls -l /new_root
```
若是，证明安装的分区应该没问题， 再查看是否是一个指向`/usr/bin`的软链接，如果没有链接的话可以尝试手动链接。
```sh
ls -l /new_root/sbin
```
再查看`/usr/bin`目录下是否存在`init`文件
```sh
ls -l /usr/bin
```
如果存在链接并且init都存在的话，证明是在rootfs下无法加载/usr的问题
可能是没有注意`archwiki`里关于`mkinitcpio`里提到的，独立分区`/usr`需要在`/etc/mkinitcpio.conf`下添加hook的问题
此时需要关闭虚拟机，依次点击“编辑虚拟机设置->硬件->CD/DVD->设备状态->启动时连接”，且使用ISO文件；
开启虚拟机，按`Esc`键进入引导模式，选择`EFI ... CDROM ...`进入livecd，重新挂载并切换工作区
```sh
mount /dev/sda3 /mnt #: 先挂载/
mount /dev/sda4 /mnt/usr
mount /dev/sda5 /mnt/data
mount /dev/sd1 /mnt/boot
swapon /dev/sda2
arch-chroot /mnt
```
重复上述`解决/usr单独分区的问题`的步骤

### 网络服务

重启后进入root

设置开机自启networkmanager服务
```sh
systemctl enable --now NetworkManager # 设置开机自启并立即启动 NetworkManager 服务
ping www.baidu.com # 测试网络连接
```
安装`fastfetch`打印系统信息
```sh
pacman -S fastfetch
```


## VirtualBox
依次点击“设置->常规->高级->共享粘贴板->双向”
```sh
pacman -S virtualbox-guest-utils
systemctl enable --now vboxservice.service
```


## 非root用户
```sh
useradd -m -G wheel vboxsf -s /bin/bash qwe
passwd qwe
groupadd -g 1024 WWW
chown -R root:WWW /data
chmod -R g+w /data
EDITOR=vim visudo
```
去掉`wheel`一行前的`#`




