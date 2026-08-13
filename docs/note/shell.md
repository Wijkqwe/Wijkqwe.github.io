# Shell

## command

### `column`
- `-t`: 


### `curl`

- `-O [path]`: 下载文件, 保留原始文件名.
- `-o [new name] [path]`: 下载并重命名文件.


### `diff`

```bash
diff [选项] 文件1 文件2
```
- `-c`: 显示上下文，默认3行
- `-u`: 统一格式（git使用的格式），更紧凑

```bash
diff <(ls qwe) <(ls asd)
```


### `du`
* `-h`: human avaible


### `find`
```bash
find . -name src -type d
find . -path '**/test/*.py' -type f
find . -mtime -1
find . -name "*.tmp" -exec rm {} \;
```
- `-maxdepth n`: 全局选项，最多递归n层


### `grep`

- `-r`: 递归
- `-n`: 
- `-l`: 仅显示路径，不显示行号和内容
- `-L [string]`: 检索不包含 string 的文件


### `pwd`
echo current location


### `tee`
takes its input and writes it to a file, but also to standard out.


### `touch`
create an empty file or change timestamps of file


### `which`
find command
```bash
which echo
```

### `history`

### `less`
* <kbd>ctrl</kbd>+<kbd>u</kbd> scroll up
* <kbd>ctrl</kbd>+<kbd>d</kbd> scroll down
* <kbd>q</kbd> quit


### `ln`
```
ln [目标路径] [链接路径]
```

- `-s`: 创建软链接
- `-f`: 强制执行，如果目标位置已存在同名链接，会直接覆盖，无需手动删除旧链接


### `wc`

### `jobs`

### `bg`
make suspended process continued in background
```bash
bg %1
```
"%" is referring to the fact that I want to refer to the specific process


### `fg`

### `kill`
kill jobs.
allow to send any sort of Unix signal
```bash
kill -STOP %1
```


### `tar`

- `-f`: 指定文件.
- `-v`: 详细信息.
- `-x`: 解包.
- `-z`: 通过 gzip 解压缩(处理 `.gz`).


### `nohup`
encapsulating whatever command you're executing and ignoring wherever you get a hang up signal


### `ctrl`+`r` 

### history substring search

### `more`

- <kbd>space</kbd>: 下一屏
- <kbd>enter</kbd>: 下一行
- <kbd>b</kbd>: 前一屏
- <kbd>q</kbd>: 退出


## stream

### `|`


### `>`
standard output
overwrite

#### 0
```sh
sudo echo "500" > brightness
```
doesnot work, cause `>` was set by shell,
in this case, is run `sudo` with arguments `echo` and `"500"`, and send its output to the file called brightness


### `2>`
redirecting the standard error


### `<`
standard input
overwrite


### `>>`
append


### `<<`
append

#### `<< 'EOF'`

进入 here-document 输入模式, 直到单独一行的 EOF 结束


## `/dev/null`
is kind of like a special device in Unix system where can write and it will be discarded


## 特殊参数/符号

### `&`
make program running in the background

### `!!`
execute last command

### `;`
Concatenate command in the same line.

### `<(...)`
execute `...` and get the output to kind of like a temporary file and it will give the file handle to the command
```bash
cat <(ls) <(ls ..)
```

### `#`
as root


### `--`

停止处理后续标志.

Sometimes, you want to pass something that _looks_ like a flag as a
normal argument. For example, imagine you wanted to remove a file
called `-r`. Or you want to run one program "through" another, like
`ssh machine foo`, and you want to pass a flag to the "inner" program
(`foo`). The special argument `--` makes a program _stop_ processing
flags and options (things starting with `-`) in what follows, letting
you pass things that look like flags without them being interpreted
as such: `rm -- -r` or `ssh machine --for-ssh -- foo --for-foo`.after this will

### globbing

#### `*`
match any length of characters


#### `?`
match any single character

#### `{}`

```bash
cat qwe.{c,h}
## equal
cat qwe.c qwe.h

touch pro{1,2}/test{1,2,3}.py
## equal
touch pro1/test1.py pro1/test2.py pro1/test3.py pro2/test1.py pro2/test2.py pro2/test3.py

touch {a..j}
## equal
touch a b ... j
```

## 环境变量

### $PATH
follow this to find where command is,


## 命令行快捷键

### 移动

- ctrl+a: 光标移动到行首
- ctrl+e: 光标移动到行尾
- ctrl+左右方向键: 单词间移动


### 删除/剪切


## script

### operator

#### logical

- `||`: will execute the left one and if didn't work, then execute the right one
- `&&`: only execute the second part if the first run without errors


#### comparison

- `-eq`: equal
- `-ne`: non equal
- `-le`: less or equal


### variable
use `$`.

- in `""`: was expanded.
- in `''`: just itself.


#### `$*`

- MCD function
	```bash
	mcd() {
		mkdir -p "$1"
		cd "$1"
	}
	```
	`$1` like `argv` in `bash`, 

	to execute this script in bash and load it
	```bash
	source file-name
	```

* `$0` the name of the script
* `$1` through `$9` will be the first through the ninth arguments
* `$?` get error code from the previous command
	* `$? = 0` work success, or `true`
	* `$? = 1` work doesnot, or `false`
* `$_` will get the last argument of the previous command
* `$#` the number of arguments that be giving to the command
* `$$` the process ID of this command that is running
* `$@` will expand to all the arguments 


### `#!`
is the way that the shell will know how to run this program

#### env
use `#!/usr/bin/env python`. 
it's gonna search in that path for python binary and then use that to interpret this file.
that will make this more portable so it can be run in more machine.


### `cd`
use `cd ... || exit`.
if you don't have permissions, or it doesn't exist, that will give a nonzero error command.


### `for`

```bash
for file in "$@"; do
	...
done
```


### `[ ... ]`
Equal `test ...`.


#### `[[ ... ]]`
`bash` keyword. Stronger.

### comment

#### `#`

当存在`\`时，优先进行`\`拼接，然后再处理`#`注释。
因此会将该行到结尾都注释。


## tool

### shellcheck

### man

### colorstorm

主题构建工具[github](https://github.com/benbusby/colorstorm).

`colorstorm`: 生成一个随机的深色主题进入编辑.

- `-l`: 生成随机浅色主题.
- `-m`: 生成随机单色主题.
- `-i <path>`: 加载参考图片.
- `-f <path>`: 加载已有主题.

### tldr
neat tool
will have some nice kind of explanatory examples of how you want to use this command

### fd
by default will use regex and will ignore gitfiles.
color-code, have better Unicode support.

### tree

### broot

### ncdu

### lsof

### stow

批量建立软链接，可用于管理配置文件.

- `-n`: 模拟操作，不实际执行
- `-v`: 显示详情


## job control
```bash
man signal
```

* `jobs` show jobs
* `bg` to continue job

### SIGINT
<kbd>ctrl</kbd>+<kbd>c</kbd>

### SIGKILL
cannot be captureed

### SIGQUIT
<kbd>ctrl</kbd>+<kbd>\\</kbd>

### SIGSTOP
<kbd>ctrl</kbd>+<kbd>z</kbd>


## remote control

### `ssh`

#### ssh key

#### `scp`
copy files

#### `ssh-copy-id`
copy id

#### `rsync`


#### config

