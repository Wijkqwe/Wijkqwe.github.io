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

## 虚拟环境

### venv

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

