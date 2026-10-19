# pacman

```sh
man pacman
```

## Removing packages

```sh
pacman -R <package_name>
```
- `-Rs`: To remove a package and its dependencies which are not required by any other installed package.


## Querying package databases

- `-Ss`: searching both in packages' names and descriptions.
- `-Q`: 查询本地安装的包.
    - `-e`: 仅列出显示安装的包.
    - `-m`: AUR 仓库包.
    - `-n`: 官方仓库包.
    - `-q`: 精简输出, 仅包名.




