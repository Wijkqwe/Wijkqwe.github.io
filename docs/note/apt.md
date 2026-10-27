# apt

## download

- `apt-get download <包>`: 仅下载指定的 `.deb` 包不安装.

## install

- `apt install <pkg>`: 可安装远程和本地包.
- `dpkg -i <pkg>`: 安装本地包.

## list

- `apt list --installed`: 列出所有已安装的包.
- `apt-mark showmanual`: 列出显式安装的包.
- `dpkg -l`: 列出所有已安装的包.
- `dpkg -s <pkg>`: 查看包状态.
- `dpkg-deb -c <pkg>`: 列出包内文件.

## uninstall

- `apt remove <pkg>`:

## unzip

- `dpkg-deb -x <pkg> <path>`: 解压包内文件到指定路径.
