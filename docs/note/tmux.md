# tmux

## main

* session
	* window
		* pane

prefix key <kbd>mod</kbd>: <kbd>ctrl</kbd>+<kbd>b</kbd>

- <kbd>mod</kbd> <kbd>?</kbd>: help
- <kbd>mod</kbd> <kbd>]</kbd>: paste text which copyed in copy mode
- <kbd>mod</kbd> <kbd>~</kbd>: list the information cache

- <kbd>mod</kbd> <kbd>mod</kbd>: send once `mod` to the underlying shell

- <kbd>shift</kbd>+<kbd>mouse</kbd>选中文本 if `set -g mouse on`.

### modes

#### normal

#### copy
By <kbd>mod</kbd> <kbd>[</kbd>. <kbd>q</kbd> to exit.

Move like vim by `setw -g mode-keys vi`.


#### command 
By <kbd>mod</kbd> <kbd>:</kbd>.


### config

#### path
`~/.tmux.conf`


#### 设置选项
- `set`: equal `set-option`.
- `setw`: equal `set-window-option`.


#### 加载配置
- `tmux source-file ~/.tumx.conf`: in shell.
- <kbd>mod</kbd> <kbd>:</kbd>, `source-file ~/.tumx.conf`.


### color
```bash
for i in {0..255}; do printf "\x1b[38;5;${i}mcolor${i} - ██████████\n"; done
```

---

## session

```bash
#: create new session
tmux [new -s session-name -n window-name]

#: restore session
tmux at [-t session-name]

#: list sessions
tmux ls

#: close session
tmux kill-session -t session-name

#: close server
tmux kill-server
```

- <kbd>mod</kbd> <kbd>d</kbd>: detach
- <kbd>mod</kbd> <kbd>D</kbd>: select to detach
- <kbd>ctrl</kbd>+<kbd>d</kbd>: exit

- <kbd>mod</kbd> <kbd>r</kbd>: force reload the current session
- <kbd>mod</kbd> <kbd>s</kbd>: display the list of session to selection and switching
- <kbd>mod</kbd> <kbd>:</kbd>: enter command line mode


---

## window

### create
- <kbd>mod</kbd> <kbd>c</kbd>: create a new window

### close
- <kbd>mod</kbd> <kbd>&</kbd>: close the current window

### switch
- <kbd>mod</kbd> <kbd>p</kbd>: go to the previous window
- <kbd>mod</kbd> <kbd>n</kbd>: go to the next window
- <kbd>mod</kbd> <kbd>num</kbd>: go to the number window
- <kbd>mod</kbd> <kbd>w</kbd>: choose window from list

### rename
<kbd>mod</kbd> <kbd>,</kbd>: rename window
<kbd>mod</kbd> <kbd>.</kbd>: rename window number


---

## pane

### split

- <kbd>mod</kbd> <kbd>"</kbd>: split current display into two different panes
- <kbd>mod</kbd> <kbd>%</kbd>: split current display into two different panes vertically

- <kbd>mod</kbd> <kbd>!</kbd>: split the current pane into a window

### move

- <kbd>mod</kbd> <kbd>arrow</kbd>: navigate through the different pane

- <kbd>mod</kbd> <kbd>space</kbd>: kind of equispace the current ones and use different layout

- <kbd>mod</kbd> <kbd>ctrl</kbd>+<kbd>b</kbd>: all panes move forward
- <kbd>mod</kbd> <kbd>alt</kbd>+<kbd>o</kbd>: all panes move backward

- <kbd>mod</kbd> <kbd>;</kbd>: change to the previous pane
- <kbd>mod</kbd> <kbd>o</kbd>: change to the next pane

- <kbd>mod</kbd> <kbd>{</kbd>: the current pane swaps with the previous pane
- <kbd>mod</kbd> <kbd>}</kbd>: the current pane swaps with the next pane

### delete

- <kbd>mod</kbd> <kbd>x</kbd>: close the current pane


### resize

- <kbd>mod</kbd> <kbd>ctrl</kbd>+<kbd>arrow</kbd>: resize the current pane size
- In command mode, `resize-pane -[U/D/L/R] [num]`

### information
- <kbd>mod</kbd> <kbd>q</kbd>: display pane number
- <kbd>mod</kbd> <kbd>t</kbd>: show clock


### zoom
- <kbd>mod</kbd> <kbd>z</kbd>: zoom current pane


---

## plugin

### opertor
```
....../tmux-plugin-manager/bin/install_plugins
....../tmux-plugin-manager/bin/updata_plugins all
....../tmux-plugin-manager/bin/updata_plugins tmux-resurrect

```

### resurrect
<kbd>mod</kbd> <kbd>ctrl</kbd>+<kbd>s</kbd>: save
<kbd>mod</kbd> <kbd>ctrl</kbd>+<kbd>r</kbd>: restore



#!/bin/bash


tmux -V
tmux list-session



