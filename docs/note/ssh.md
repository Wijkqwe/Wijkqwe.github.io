# SSH

## command

### scp

```sh
scp [option] <source> <target>
```

remote: `user@IP:path`.

- `-i <key_file>`: 密钥.
- `-P <端口号>`:
- `-r`: 目录递归.

### ssh

### ssh-copy-id

将公钥快速安装到远程.

- `-i <file>`: 指定文件. 若不以 `.pub` 结尾会补上.
- `-n`: 试运行.

### ssh-keygen

- `-C <注释>`: 添加注释
- `-t <算法>`: 指定算法.
    - ed25519:
    - rsa

