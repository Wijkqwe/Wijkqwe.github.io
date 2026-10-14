# LLVM

## CMake 配置

### LLVM_LINK_LLVM_DYLIB

`-DLLVM_LINK_LLVM_DYLIB=ON`: 告诉LLVM工具(如clang、opt等)链接到共享库(`libLLVM.so`), 而不是静态链接各个LLVM组件库.
  > 启用时, 可能对 JIT 造成影响.

CUDA 运行时支持:

- `-DCMAKE_CUDA_COMPILER=clang`
- `-DCMAKE_CUDA_HOST_COMPILER=clang++`
- `-DFLANG_EXPERIMENTAL_CUDA_RUNTIME=ON`

## 测试

### 单元测试 check

将 `check-<dir>` 作为目标进行构建，自动执行对应目录的测试。

## 基础概念

### TableGen

通过 `.td` 文件声明式地描述数据结构, 再由 `llvm-tblgen` / `mlir-tblgen` 工具生成 C++ 代码.

#### in MLIR

TableGen 是方言定义与转换的引擎. 主要服务于 Dialect（方言）的声明式定义和重写规则的描述.

##### ODS

###### Trait

- `Pure`: `mlir/include/mlir/Interfaces/SideEffectInterfaces.td`.

    用来标记一个操作没有副作用且结果只取决于操作数.
    使用示例:

    ```tablegen
    def MyAddOp : MyDialect_Op<"add", [Pure]> {
    }
    ```

    标记 Pure 后，MLIR 会自动:

    - 允许该操作被死代码消除（DCE）——如果结果没被使用，直接删除。
    - 允许该操作被公共子表达式消除（CSE）——如果两个相同的 MyAddOp 出现，合并为一个。
    - 允许该操作被常量折叠——如果 lhs 和 rhs 都是常量，直接算出结果.

- `DeclareOpInterfaceMethods<X>`: `mlir/include/mlir/IR/Interfaces.td`.
    - 给 op 挂上对应接口 Trait.
    - 自动生成方法声明.

#### in LLVM

TableGen 用于解决目标后端开发中大量重复、易错的手写代码问题.
包括: 指令定义与模式匹配、寄存器与调度信息.

### 指令选择

将 LLVM IR 转换为目标机器指令的整个阶段.

- 指令匹配: 判断 IR 中的某个操作模式能否对应到目标架构的某条（或某组）指令.
- 指令映射: 匹配成功后的替换/生成动作, 即把 IR 中的节点或指令映射为目标机器指令.

### Chain

SelectionDAG 中特殊的依赖边.
顺序约束, 保证有副作用的操作按程序顺序执行, 允许在两个节点之间安排其他独立节点.

### Glue

SelectionDAG 中特殊的依赖边.
粘合约束, 强制两个节点必须紧挨着执行，中间不能插入任何其他指令.

### EVT

Extended Value Type 扩展值类型. SelectionDAG 中值的类型.

一个泛化的类型包装器，可以表示任何类型（包括整数、浮点、向量，甚至指针、函数等复杂类型）.

### MVT

Machine Value Type 机器值类型. SelectionDAG 中值的类型.

一个精简的、预定义的枚举类型，只包含硬件直接支持的基本类型.

