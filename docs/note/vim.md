# Vim

## Mode

- normal
- insert
- replace
- visual
	- line
	- block
- command line

---

### mode change

#### 切换到插入模式(insert || input)

- <kbd>i</kbd> 在光标前插入
- <kbd>a</kbd> 在光标后插入
- <kbd>I</kbd> 在行首插入
- <kbd>A</kbd> 在行尾插入
- <kbd>o</kbd> 在光标下一行插入
- <kbd>O</kbd> 在光标上一行插入
- <kbd>s</kbd> 删除光标处字符并插入
- <kbd>S</kbd> 删除光标所在行并插入

---

#### 切换到取代模式

- <kbd>r</kbd> 替代光标所在处一次
- <kbd>R</kbd> 替代光标所在处,直到esc

---

#### to visual mode

- <kbd>v</kbd>
- <kbd>V</kbd>
- <kbd>crtl</kbd>+<kbd>v</kbd>

---

## normal

### move

#### 左移

- <kbd>h</kbd> 左移一位
- <kbd>b</kbd> 移至前一单词首
- <kbd>B</kbd> 移至前一单词首(忽略符号)
- <kbd>^</kbd> 软行首
- <kbd>0</kbd> 硬行首
- <kbd>(</kbd> 移至句首

---

#### 右移

- <kbd>l</kbd> 右移一位
- <kbd>e</kbd> 词尾
- <kbd>w</kbd> 下一词首
- <kbd>E</kbd> 下一词尾
- <kbd>W</kbd> 下一词尾(忽略符号)
- <kbd>$</kbd> 行尾
- <kbd>)</kbd> 下一句首

---

#### 上移

- <kbd>k</kbd> 上移一行
- <kbd>ctrl</kbd>+<kbd>u</kbd> 上移1/2页
- <kbd>ctrl</kbd>+<kbd>b</kbd> 上移1页
- <kbd>{</kbd> 移至段首
- <kbd>gg</kbd> 移至文件首行

---

#### 下移

- <kbd>j</kbd>
- <kbd>ctrl</kbd>+<kbd>d</kbd> 下移1/2页
- <kbd>ctrl</kbd>+<kbd>f</kbd> 下移1页
- <kbd>G</kbd> 移至文件末行
- <kbd>}</kbd> 下一段首

---

#### 其他

- <kbd>[[</kbd> 移至上一部分
- <kbd>]]</kbd> 移至下一部分
- <kbd>[]</kbd> 移至上一部分末
- <kbd>][</kbd> 移至下一部分末
- <kbd>%</kbd> when cursor hovering on a different type of grouping, jump between matching parentheres.
- <kbd>]d</kbd> 移至下一诊断位置
- <kbd>[d</kbd> 移至上一诊断位置

---

### find

- <kbd>f</kbd>
    - <kbd>f</kbd><kbd>a</kbd> move to the first `a` after cursor this line
- <kbd>F</kbd>
    - <kbd>F</kbd><kbd>a</kbd> move to the first `a` before cursor this line
- <kbd>t</kbd>
    - <kbd>t</kbd><kbd>a</kbd> move to left the first `a` after cursor this line
- <kbd>T</kbd>
    - <kbd>T</kbd><kbd>a</kbd> move to right the first `a` before cursor this line
- <kbd>/</kbd>
    `/<string>`.
    - <kbd>n</kbd> to next
    - <kbd>N</kbd> to

---

### delete

- <kbd>d</kbd>
	- <kbd>d</kbd><kbd>d</kbd> delete this line
	- <kbd>d</kbd><kbd>move</kbd> delect to the move
- <kbd>c</kbd>
	- <kbd>c</kbd><kbd>c</kbd> delete this line and into insert mode
	- <kbd>c</kbd><kbd>move</kbd> delect to the move and into insert mode
- <kbd>x</kbd>

### undo

- <kbd>u</kbd>

### redo

- <kbd>ctrl</kbd>+<kbd>r</kbd>


### copy

- <kbd>y</kbd>
	- <kbd>y</kbd><kbd>y</kbd> copy this line
	- <kbd>y</kbd><kbd>move</kbd> copy to `move`

### paste

- <kbd>p</kbd>: paste a line below

---

### <kbd>~</kbd>
change the case of the characters that currently selected 

### <kbd>.</kbd>
repeat the previous editing command that was made

### fold

- <kbd>z</kbd>+<kbd>a</kbd>: open or close current fold

---

### modifier

- `i`: inside
	```
	(qwe)[asd]
	```
	- when cursor hovering over one of "qwe", use `ci(` to delete "qwe"and into insert mode
	- when cursor hovering over one of "asd", use `di[` to delete "asd"

- `a`: all, like `i`, but include "(),[],'', ``, "

---

## visual

### visual mode
<kbd>v</kbd> select kind of a contiguous stream of text

### visual line
<kbd>V</kbd> select whole lines at a time

### visual block mode

<kbd>ctrl</kbd>+<kbd>v</kbd> select rectangular blocksof text

---

## command line

### write

- `:w`: force write even file not change
- `:x`: write if file changed and quit

### quit

- `:q`: quit current window
- `:qa`: quit all window

### open file

- `:e` [file_path]: 

### split

#### vertically

- `:vs`/`:vsplit` [file_path]
- <kbd>ctrl</kbd>+<kbd>w</kbd> <kbd>v</kbd> 

#### horizontally

- `:sp`/ `:split`
- <kbd>ctrl</kbd>+<kbd>w</kbd> <kbd>s</kbd> 

### replace
```vim
:[range]s/{target}/{string}/[flags] [count]
```
if `{string}` is an empty string, will delete `{target}`

Instead of the slash character (/), you can use any other non-alphanumeric single-byte character except as a delimiter.

#### range
When no range is specified the substitute command operates only in the current line.

- `%`: entire file, every line
- `.`: the current line
- `$`: the last line of file
- `,`: a range between two lines, the range is inclusive, which means that the first and last lines are included in the range.
	```
	#: line 3 to line 10
	:3,10s/foo/bar/g
	```
- `+`/`-`: followed by a number that is added or subtracted from the preceding line number. If the number after the symbol is omitted, it defaults to 1.

#### flags
- `g`: to replace all target in the current line
- `c`: to comfirm each substitution
- `i`: to ignore case for the search pattern

#### regular expressions
enable

The ^ (caret) symbol matches the beginning of a line and .* matches any number of any characters.

#### Substituting Whole Word
use `\<` and `\>`
```
:s/\<foo\>/boo/
```

### highlight

#### 查看
- `:highlight`: 查看所有.
- `:hi`: 缩写.
- `:hi <>`: 查看特定组.
- `:hi <> <> <>`: 查看多个组.
- `:Inspect`: 查看光标位置的语法语义高亮组.

### LSP

- `:lua vim.diagnostic.open_float()`[neovim]: 查看当前行的诊断.
- `:lua print(vim.inspect(vim.lsp.get_clients()))`[neovim]: 查看 lsp.

## Script

### 作用域

- 无 / `g:`: 全局
- `s:`: 脚本局部
- `b:`: 缓冲区局部
- `w:`: 窗口局部
- `t:`: 标签页局部
- `l:`: 函数局部
- `a:`: 函数参数
- `v:`: Vim 内置变量

#### `<SNR>`

Script Number Register 脚本编号寄存器.
```
s: ≡ <SNR>{id}_
```
其中 `{id}` 是脚本 ID. `s:` 相当于语法糖.

#### `<SID>`

<SID> 是 Script ID 的占位符. Vim 在解析映射/命令定义时会把它替换为该脚本的真实 `<SNR>{id}_`.

用于在映射/命令中引用脚本局部函数.

### Mapping

- `<silent>`: 执行该映射时不显示实际执行的命令.

### Function

```
function[!] [作用域]<函数名>([参数列表]) [属性]
```

#### 属性

- `range`: 使函数调用时可接受行范围(`:1,10call foo()`). 函数内部通过 `a:firstline` 和 `a:lastline` 获取范围起止行号.
- `abort`: 函数内部一旦发生未捕获的错误, 立即终止函数执行, 不再继续往下运行.
- `dict`: 让函数可以作为字典的方法调用, 函数内部通过 `self` 访问该字典.
- `closure`: 让函数捕获（记忆）定义时所在作用域的局部变量, 即使外层函数已返回, 这些变量依然存活.

## Options

```bash
man vim
```

- `-r`: 列出交换文件.
    - `-r <file>`: 从交换文件中恢复内容.

---

## 按功能分类

### marks

- <kbd>m</kbd> anykey: 设置标记, 记录光标当前位置. 小写字母用于文件内跳转, 大写字母用于跨文件跳转.
- <kbd>'</kbd> anykey: 跳转到标记行首.
- `:marks`: 查看全部标记.
- `:delmarks`: 删除标记.
    - `:delmarks anykey`: 删除特定标记.
    - `:delmarks!`: 删除当前缓冲区全部标记.

## buffer
use for open files
there isn't necessarily a one-to-one correspondence between buffers and windows

## game

- vim golf.

## leader key

## vim macros


