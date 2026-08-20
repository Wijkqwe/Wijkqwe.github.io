# GDB

## flags

- `-q`: 静默启动

## command

### 简写

- `b`: `break`
- `c`: `continue`
- `i`: `info`
- `l`: `list`
- `n`: `next`
- `p`: `print`
- `q`: `quit`
- `r`: `run`
- `s`: `step`

### 退出

- `q`

### 断点

#### 设置

- `b 10`: 指定行
- `b main`: 函数入口

#### 删除断点

- `delete`: 删除全部断点
- `delete 1`: 删除编号为1的断点

### 执行控制

- `start [<args>]`: 开始执行.
- `r [<args>]`: 开始执行到断点.
- `c`: 继续执行到下一个断点.
- `s`: 单步执行，进入函数
- `n`: 单步执行，不进入函数
- `finish`: 执行完当前函数并返回

### 远程连接

- `target remote localhost:26000`

### 加载符号表

- `file kernel/kernel`

### 查看

- `i`
- `i macro <VALUE>`: 查看宏定义`<VALUE>`的值。

#### 查看代码

- `l`: 查看当前行附近
    - `l 10`: 查看指定行
    - `l main`: 查看指定函数

#### 变量

- `p`
- `display`
- `watch`: 设置数据断点, 值改变时暂停.

#### 查看断点

- `i breakpoints`
- `i b`

### set

- `set follow-fork-mode <mode>`: 调试多进程程序(使用 fork() 系统调用)的核心命令. 它控制着当父进程调用 fork() 创建子进程后, GDB 应该跟踪(调试)哪一个进程.
    - `child`: 跟踪子进程, 父进程继续运行
    - `parent`: 跟踪父进程, 子进程继续运行
    - `ask`: 每次 fork() 时询问

