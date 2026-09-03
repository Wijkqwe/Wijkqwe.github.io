# LLVM

## 工具链


### llvm-nm

用于列出 LLVM 比特码 (Bitcode)、目标文件和静态库中符号表。

### llvm-ar

归档工具，它的主要用途是创建、修改和查看静态库（`.a` 文件）。
可以把它看作一个专门用来管理 `.o` 目标文件档案的管理器。

#### 操作

操作 | 功能说明 | 常用命令示例
--|--|--
r (replace) | 替换或添加文件到库中。这是最常用的操作。如果文件已存在则替换，否则追加到末尾。 | llvm-ar rcs libfoo.a a.o b.o
t (table) | 列出库的内容（查看目录）。不加修饰选项只显示文件名。 | llvm-ar t libfoo.a
x (extract) | 提取文件。将库中的指定文件解压到当前目录。 | llvm-ar x libfoo.a a.o
d (delete) | 删除库中的指定文件。 | llvm-ar d libfoo.a a.o

## 测试

### 单元测试 check

将 `check-<dir>` 作为目标进行构建，自动执行对应目录的测试。

