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
- <kbd></kbd>
- <kbd>}</kbd> 下一段首

---

- <kbd>[[</kbd> 移至上一部分
- <kbd>]]</kbd> 移至下一部分
- <kbd>[]</kbd> 移至上一部分末
- <kbd>][</kbd> 移至下一部分末
- <kbd>%</kbd> when cursor hovering on a different type of grouping, jump between matching parentheres.

---

### find

- <kbd>f</kbd>
	<kbd>f</kbd><kbd>a</kbd> move to the first `a` after cursor this line 

- <kbd>F</kbd>
	<kbd>F</kbd><kbd>a</kbd> move to the first `a` before cursor this line 

- <kbd>t</kbd>
	<kbd>t</kbd><kbd>a</kbd> move to left the first `a` after cursor this line

- <kbd>T</kbd>
	<kbd>T</kbd><kbd>a</kbd> move to right the first `a` before cursor this line

- <kbd>/</kbd>
	- <kbd>n</kbd> to next
	- <kbd>N</kbd> to 


---

### delete

- <kbd>d</kbd>
	- <kbd>d</kbd><kbd>d</kbd> delete this line
	- <kbd>d</kbd><kbd>move</kbd> delect to the move
- <kbd>c</kbd>
	- <kbd>d</kbd><kbd>d</kbd> delete this line and into insert mode
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

### `~`
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



---

## buffer
use for open files
there isn't necessarily a one-to-one correspondence between buffers and windows

---

## game

### vim golf

## leader key

## vim macros

## marks

- <kbd>m</kbd>+anykey
- <kbd>'</kbd>+anykey



