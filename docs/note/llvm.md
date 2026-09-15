# LLVM

## CMake 配置

### LLVM_LINK_LLVM_DYLIB

`-DLLVM_LINK_LLVM_DYLIB=ON`: 告诉LLVM工具(如clang、opt等)链接到共享库(`libLLVM.so`), 而不是静态链接各个LLVM组件库.

> 启用时, 可能对 JIT 造成影响.

## Tool

### llc

将 `.ll` / `.bc` 编译为指定目标架构的汇编代码.

### llvm-lit

自动递归地查找目录中的测试文件, 并通过 `lit.cfg` 或 `lit.site.cfg` 配置文件来定义测试套件的行为.

- `-v`/`--verbose`: 详细输出失败测试的信息.
    - `-v -a`: 详细输出全部测试的信息.
- `-s`: 精简输出.

### llvm-mc

将汇编代码转换成目标文件;
将二进制码反汇编成汇编指令.

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

### llvm-as

LLVM 汇编器（Assembler）。它将人类可读的 LLVM IR 文本格式（.ll 文件）转换为二进制位码（Bitcode）格式.

### llvm-dwarfdump

是 LLVM 工具链中一个专门用于解析、转储和验证 DWARF 调试信息的命令行工具.
用于把二进制文件（如可执行文件、目标文件、静态库或 .dSYM 包）里那些给调试器看的、机器码级别的 DWARF 调试信息，转换成人类可以阅读的格式.

- `--debug-info`: 查看和解析二进制文件中 `.debug_info` 调试信息节.

### mlir-tblgen

加载了 MLIR 特有的后端(如 ODS 相关后端), 输入 `.td` 输出 C++ 文件.

- `-gen-*-decls`: 生成声明(头文件).
- `-gen-*-defs`: 生成定义(源文件).
- `-gen-*-doc`: 生成文档.

其中 `*` 包括:

- `op`
- `dialect`
- `typedef`
- `enum`
- `struct-attr`
- `pass`

### opt

LLVM 优化与分析工具, 用于对 Bitcode 进行优化或执行分析 Pass.

- `-passes=<pass>`: 指定要运行的 Pass.
    - `view-cfg`: 一个分析 Pass, 它的作用是为当前模块中的每一个函数生成控制流图,
      并调用图形化查看器(通常是 dot + 图片查看器, 如 eog 或 Preview)弹出窗口显示.
    - `mem2reg`: 将类似 allocas 的操作转换为 SSA 寄存器操作, 并适时插入 Phi 节点.

## 测试

### 单元测试 check

将 `check-<dir>` 作为目标进行构建，自动执行对应目录的测试。

## TableGen

通过 `.td` 文件声明式地描述数据结构, 再由 `llvm-tblgen` / `mlir-tblgen` 工具生成 C++ 代码.

### MLIR

TableGen 是方言定义与转换的引擎. 主要服务于 Dialect（方言）的声明式定义和重写规则的描述.

### LLVM

TableGen 用于解决目标后端开发中大量重复、易错的手写代码问题.
包括: 指令定义与模式匹配、寄存器与调度信息.

