# GDB

### 退出

- `quit`
- `q`


### 断点

#### 设置

- `break 10`: 指定行
- `b 10`: 简写
- `b main`: 函数入口


#### 查看

#### 删除断点

- `delete 1`: 删除编号为1的断点
- `delete`: 删除全部断点


### 执行控制

- `continue`: 继续执行到下一个断点
- `c`: 简写

- `step`: 单步执行，进入函数
- `s`: 简写

- `next`: 单步执行，不进入函数
- `n`: 简写

- `finish`: 执行完当前函数并返回


### 查看代码

- `list`: 查看当前行附近
- `l`
- `l 10`: 查看指定行
- `l main`: 查看指定函数


### 变量

- `print`
- `p`
- `display`


### 远程连接

- `target remote localhost:26000`


### 加载符号表

- `file kernel/kernel`


### 查看

- `info macro <VALUE>`: 查看宏定义`<VALUE>`的值。


#### 查看断点

- `info breakpoints`
- `info b`

