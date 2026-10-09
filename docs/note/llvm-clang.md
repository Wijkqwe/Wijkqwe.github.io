# clang

[Clang Release Notes](https://clang.llvm.org/docs/ReleaseNotes.html)
[Clang Compiler User’s Manual](https://clang.llvm.org/docs/UsersManual.html)

## argument

[Clang command line argument reference](https://clang.llvm.org/docs/ClangCommandLineReference.html)

- `-O0`: 无优化.
- `-O1`: 基础优化.
- `-O2`: 标准优化.
- `-O3`: 激进优化.

- 无相关选项: 预处理 + 编译 + 汇编 + 链接, 输出可执行文件.
- `-E`: 预处理
- `-S`: 预处理 + 编译, 输出 `.s` 汇编文件.
  > 未指定目标时输出 `clang` 默认目标, 可通过 `clang -v` 查看.
- `-c`: 预处理 + 编译 + 汇编, 输出 `.o` 目标文件.

- `-emit-llvm`: 输出 LLVM IR. 需与阶段控制选项结合使用.
    - `-S -emit-llvm`: `.ll` 文本格式.
    - `-c -emit-llvm`: `.bc` 二进制格式.

- `-target <>`:
  > https://clang.llvm.org/docs/CrossCompilation.html#target-triple
- `-Xclang <前端选项>`: 将选项传递给 clang 的前端(`-cc1` 调用).
  每次只传递一个选项.
    - `-disable-O0-optnone`: `clang -O0` 默认会给函数加上 `optnone` 属性,
      导致 `llc -O2` 仍然跳过所有优化 Pass.

