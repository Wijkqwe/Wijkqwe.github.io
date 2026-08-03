# git

## terminology

### tree
folder

### blob
file

## history model
directed acyclic graph


## data structure

### git's on disk data store
content address store where objects are addressed by their hash
```
type blob = array<byte>
type tree = map<string, tree | blob>
type commit = struct {
	parents array<commit>
	author string
	message string
	snapshot tree
}
type object = blob | tree | commit
objects = map<string, object>

def store(O)
	id = sha1(O) // hash
	objects[id] = O

def load(id)
	return objects[id]
```
```
references = map<string string>
```

## command

### 查看

#### 帮助

- `git help`: 

#### 提交

- `git show [commit]`: 查看特定提交
	- `--name-only`: 仅列出修改了哪些文件
	- `[commit] -- [file]`: 特定提交的特定文件
- `git log`: 查看历史提交
	- `--abbrev-commit`: 显示短哈希
	- `--oneline`: more compact representation
		等价于`--pretty=oneline --abbrev-commit`
	- `-- [filepath]`: 查看该文件有关commit
	- `--simplify-by-decoration`: 只显示有分支/标签引用的提交，隐藏那些没有分支变化的提交。
	- `--merges <特定分支>`: 仅显示发生合并操作的提交
	- `--stat`: 查看统计情况
	- `--pretty=<format> / format:"<自定义格式>"`: 设置输出格式。
		`format` 有一些内置格式: 
		- oneline
		- full
		- ...

		同时，可以通过占位符和颜色自定义`format`的样式。
	- `--decorate`: 在提交信息旁显示分支、标签等引用信息



#### 状态

- `git status`:查看git仓库当前状态
	- `-s`: 简洁信息
	- `-u`: 详细信息


#### 更改

- `git diff`: 查看所有未暂存(未`add`)文件的修改
	- `--staged`: 查看所有已暂存(未`commit`)文件的修改
	- `--stat`: 查看统计情况
	- `[file]`: 查看特定文件的修改


### 修改

#### 提交



---


### `git commit`
`--amend`: 打开编辑器修改最近一次提交的信息
`--amend -m ""`: 直接指定最近一次提交的信息


### `git init`

### `git cat-file`

```bash
git cat-file -P <hash>
```
print out the content


### `git add`
* `-p`: interactively


### `git blame`

### `git diff`
比较`modified`文件的差异。

### `git stash`

#### `git stash pop`

### `git bisect`


### status

#### `git restore`
撤销未add的修改。


### `git commit`
`--amend`: 打开编辑器修改最近一次提交的信息
`--amend -m ""`: 直接指定最近一次提交的信息


### branch and merge

#### `git branch`
* `--set-upstream-to=<branch>`: 
* `-m [<旧分支名>] <新分支名>`: 重命名。


#### `git checkout`
##### move the head pointer 
```bash
git checkout <hash/reference>
```
##### abanden
```bash
git checkout <file>
```
throw away the change and back to the HEAD

`-b`: create a new branch and checkout in it

- `--orphan`: create a new branch without a commit.


#### `git merge`

可以直接将远程分支合并到本地分支。

* `--abort`: back to
* `--continue`: after deal with merge conflect file and add them, continue merge

##### `git mergetool`


#### list branches
- `git branch`: 列出本地分支
- `git branch -a`: 包括远程分支
- `git branch -vv`: show extra information
- `git branch --merged`: 已合并到当前分支的分支
- `git branch --no-merged`: 未合并到当前分支的分支


#### create branch
- `git branch <new-branch-name>`: 基于当前分支创建新分支
- `git branch <new-branch-name> <commit-hash>`: 基于特定分支创建新分支
- `git checkout -b <new-branch-name>`: 创建并切换到新分支
- `git checkout -b <new-branch-name> <commit-hash>`: 基于特定分支创建并切换到新分支
- `git switch -c <new-branch-name>`: 创建并切换到新分支


#### 切换分支
- `git checkout <branch-name>`: 切换到已有分支
- `git checkout -b <new-branch-name> <commit-hash>`: 基于特定分支创建并切换到新分支
- `git switch <branch-name>`: 切换到已有分支
- `git checkout -`: 切换到上一分支


#### 删除分支
- `git branch -d <branch-name>`: 删除已合并分支
- `git branch -D <branch-name>`: 强制删除分支（即使未合并）
- `git push origin --delete <remote-branch-name>`: 删除远程分支


### commit

#### `git rebase`
压缩提交，压缩后需强制推送
- `HEAD~n`: 从`HEAD`开始的n个提交
- `-i`: 交互式
- `--abort`: 放弃正在进行的操作



### remote

#### `git remote`
* `add <name> <url>`: 
* `rename <name> <new-name>`:
- `remove <name>`: 删除


#### `git push`
`<remote> <local branch>:<remote branch>`

- `--tags`: 推送全部tag信息
- `-u`: 记录远程分支的默认值
- `--force`: 强制推送
- `--force-with-lease`: 更安全地强制推送


#### `git fetch`
```bash
git fetch <远程主机名> [<分支名>]
```


#### `git pull`
equal `git fetch, git merge`
```bash
git pull <远程主机> <远程分支>[:<本地分支>]
```


#### `git clone`
`<url> <folder name>`
- `--shallow`: without history
- `--bare`: 仅克隆裸仓库，可从裸仓库克隆完整工作目录
- `--recursive`: 克隆包含子模块（submodule）的仓库时，自动初始化并更新全部子模块，一次性获得完整项目代码。



### config

#### `git config`


### tag

#### `git tag <tag_name> [<版本号>]`

- `-a <tag_name>`: 添加
- `-m <说明>`
- `-d <tag_name>`: 删除

#### `git push --tags`
推送全部tag信息


## shell integration


