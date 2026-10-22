# Tools

## clang-offload-bundler

参与异构计算, 将针对不同目标编译出的对象合并到一个文件中.

## llc

- [llc - LLVM static compiler](https://llvm.org/docs/CommandGuide/llc.html)

将 `.ll` / `.bc` 编译为指定目标架构的汇编代码.
> 目标优先级: 指定目标 -> 文件内目标 -> `llc` 默认目标

- `-help`:
- `-help-hidden`:
- `-march=`: 指定目标.
- `-mtriple=<string>`: 指定目标三元组.
    - 无法直接列出可用三元组, 字符串解析由各架构后端.
- `--version`: 列出可用的已注册后端目标.
- `-asm-show-inst`: 在注释中输出 MCInst.
- `-asm-verbose=<bool>`: 详细模式, 在汇编中生成注释, 包括指令来源、调试信息等.
- `--debug-only=<string>[,<string>...]`: 调试选项, 输出相关日志.
  具体值由各文件通过 `#define DEBUG_TYPE` 定义.
    - `dagcombine`: DAG 合并.
    - `regalloc`: 寄存器分配相关.
    - `isel`: 指令选择相关.
    - `isel-dump`: 
    - `legalize-dag`: DAG 合法化.
    - `legalize-types`: 类型合法化.
- `--debug-pass=<value>`: 输出
    - `Structure`
- `-pass-remarks-analysis=<pattern>`: 输出 Pass 的分析类 remark.
  `<pattern>` 是 pass 名称匹配模式.
- `-pass-remarks-output=<file>`: 指定 Pass Remarks 输出位置.
    - `-pass-remarks-output=-`: 输出到 stdout 标准输出.
- `-print-after-all`: 输出每个 pass 执行后的 IR.
- `-print-after=<pass>`: 输出某 pass 执行后的 IR.
- `-print-before=<pass>`:
- `-show-mc-encoding`: 在汇编中以注释形式显示每条指令的机器码编码.
- `-stop-after=<pass>[,N]`: 在某个 pass 执行 N 次(默认 1 次)后结束并输出.
  `<pass>` 具体值可在通过 `llc -debug-pass=Structure` 得到的 `Pass Arguments` 中找到.

## llvm-lit

自动递归地查找目录中的测试文件, 并通过 `lit.cfg` 或 `lit.site.cfg` 配置文件来定义测试套件的行为.

- `-v`/`--verbose`: 详细输出失败测试的信息.
    - `-v -a`: 详细输出全部测试的信息.
- `-s`: 精简输出.

## llvm-mc

[llvm-mc](https://llvm.org/docs/CommandGuide/llvm-mc.html)

将汇编代码转换成目标文件;
将二进制码反汇编成汇编指令.

- `-disassemble "0x..."`: 用于将一系列十六进制字节解析并反汇编为汇编语法.
- `-mattr=<+|-><feature>[,...]`: 启用或禁用特定目标的 CPU 特性.
    - `-mattr=help`:
- `-show-encoding`: 在汇编(或反汇编)过程中, 额外打印出每条指令对应的机器码字节序列.
  需搭配`--assemble`(默认)或`--disassemble`使用.
- `-triple=`: 指定目标三元组.
  > https://clang.llvm.org/docs/CrossCompilation.html#target-triple
- `--version`: 列出可用的已注册后端目标.

## llvm-nm

用于列出 LLVM 比特码 (Bitcode)、目标文件和静态库中符号表。

## llvm-ar

归档工具，它的主要用途是创建、修改和查看静态库（`.a` 文件）。
可以把它看作一个专门用来管理 `.o` 目标文件档案的管理器。

### 操作

操作 | 功能说明 | 常用命令示例
--|--|--
r (replace) | 替换或添加文件到库中。这是最常用的操作。如果文件已存在则替换，否则追加到末尾。 | llvm-ar rcs libfoo.a a.o b.o
t (table) | 列出库的内容（查看目录）。不加修饰选项只显示文件名。 | llvm-ar t libfoo.a
x (extract) | 提取文件。将库中的指定文件解压到当前目录。 | llvm-ar x libfoo.a a.o
d (delete) | 删除库中的指定文件。 | llvm-ar d libfoo.a a.o

## llvm-as

LLVM 汇编器（Assembler）。它将人类可读的 LLVM IR 文本格式（.ll 文件）转换为二进制位码（Bitcode）格式.

## llvm-dwarfdump

是 LLVM 工具链中一个专门用于解析、转储和验证 DWARF 调试信息的命令行工具.
用于把二进制文件（如可执行文件、目标文件、静态库或 .dSYM 包）里那些给调试器看的、机器码级别的 DWARF 调试信息，转换成人类可以阅读的格式.

- `--debug-info`: 查看和解析二进制文件中 `.debug_info` 调试信息节.

## mlir-tblgen

加载了 MLIR 特有的后端(如 ODS 相关后端), 输入 `.td` 输出 C++ 文件.

- `-gen-*-decls`: 生成声明(头文件).
- `-gen-*-defs`: 生成定义(源文件).
- `-gen-*-doc`: 生成文档.

其中 `*` 包括:

- `op`
- `op-interface`
- `dialect`
- `typedef`
- `enum`
- `struct-attr`
- `pass`

## opt

LLVM 优化与分析工具, 用于对 Bitcode 进行优化或执行分析 Pass.

- `-passes=<pass>`: 指定要运行的 Pass.
    - `view-cfg`: 一个分析 Pass, 它的作用是为当前模块中的每一个函数生成控制流图,
      并调用图形化查看器(通常是 dot + 图片查看器, 如 eog 或 Preview)弹出窗口显示.
    - `mem2reg`: 将类似 allocas 的操作转换为 SSA 寄存器操作, 并适时插入 Phi 节点.


