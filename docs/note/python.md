# Python

## flag

```bash
python [flag] [<script> [script_flag]]
```

- `-s`: 跳过 site 模块对用户级目录的加载.
- `-v`: 详细信息, 可叠加.

## pip

### 查

- `pip list`: 查看安装了哪些包.
    - `--not-required`: 查看非依赖项.

## 标准库模块

```
python -m <module> ...
```

### 虚拟环境

#### venv

Python 3.3+ 版本提供了一个叫做 venv 的模块.

```bash
#: 创建虚拟环境.
python -m venv <envname>

#: 激活虚拟环境.
$ source <envname>/bin/activate

(<envname>) $

#: 退出虚拟环境.
(<envname>) $ deactivate
```

```bash
#: 查看安装了哪些包.
<envname>/bin/pip list
```

### http.server

1. 在本地启动一个 HTTP 服务
1. 将一个目录(默认当前目录)作为网站根目录对外提供文件访问
1. 浏览器访问端口(默认 8000)即可看到目录列表并下载文件

- `python -m http.server`: 默认端口 8000
- `python -m http.server 8000`: 指定端口


