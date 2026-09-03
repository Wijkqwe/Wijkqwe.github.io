# 基础概念

## A

- **AGU**: 地址生成单元. 处理器内部专门负责计算和生成内存访问地址的硬件单元。可与 ALU 并行。
- **Antichain**: 反链, 是图论（特别是偏序集理论）中的一个重要概念。
- **ASIC**: Application-Specific Integrated Circuit 专用集成电路.
- **Attention Mechanism**: 注意力机制, 是当今几乎所有主流大模型（如GPT、LLaMA、DeepSeek）最核心的底层技术。可以通俗地理解为一种让模型在处理信息时“抓重点、懂关联”的能力。

## B

- **Backpressure**: 是计算机系统中一种流量控制机制。它指的是：当下游处理单元（Consumer）处理速度跟不上上游（Producer）的数据发送速度时，下游会反过来向上游发送一个信号，让上游暂停或减速发送数据。
- **Bank**: 是指将大容量的存储资源（如内存、缓存、寄存器文件）划分为多个独立的、可以并行访问的小单元。每个小单元就是一个Bank。
- **Bleeding-edge**: 指的是采用最新、最前沿，但尚未经过充分测试的技术、框架或工具。
- **BMM**: Batch Matrix Multiplication 批量矩阵乘法.
- **BSP**: Bulk Synchronous Parallel 批量同步并行.

## C

- **C2C**: Chip-to-Chip，芯片到芯片. 将两颗或两颗以上独立制造、已经切割好的芯片,
  通过某种方式连接在一起，共同工作，以实现更强大或更复杂的系统功能。
- **CoT**: Chain of Thought 思维链.
- **CEFR**: 英语语言级别.
- **CSP**: 约束满足问题。不关心“最优”，只关心“能不能找到一组赋值，让所有约束都同时满足”。

## D

- **DLP**: Data-Level Parallelism 数据级并行.
- **DSP**: Digital Signal Processor 数字信号处理器, 是一种专门为快速处理连续数字信号流（如声音、图像、雷达回波）而设计的微处理器。

## F

- **FP16**: Floating-Point 16-bit 16位浮点数。

## G

- **GDSII**: Graphic Design System II 图形设计系统二代是芯片设计领域最关键、应用最广泛的数据库文件格式。
- **GeMM**: General Matrix Multiply 通用矩阵乘法.

## H

- **HBM**: 高带宽内存.
- **HM 算法**: Hindley-Milner 算法, 是一套为程序自动推导出最通用类型的经典类型推理算法。它也被称为Damas-Milner算法。
- **HPC**: High-Performance Computing 高性能计算.

## I

- **ICU**: Instruction Control Unit 指令控制单元.
- **ILP**:
    - 指令级并行。
    - 整数线性规划。在线性约束条件下，求整数决策变量的最优解（最大化或最小化某个目标）。
- **Intrinsics**: 内联函数/内置函数.
  - 在编译器 (如LLVM, GCC) 的语境下, 指的是编译器提供的一组看起来像函数,
    但实际会直接映射为特定硬件指令的特殊API.
- **ISel**: Instruction Selection 指令选择。是编译器将平台无关的中间表示（IR）
  转换为目标机器（如x86、ARM、GPU）特有的指令过程中的第一个关键步骤。

## L

- **live in**: region 外的变量在 region 内被用到.
- **LoRA**: Low-Rank Adaptation 低秩适配。属于参数高效微调（Parameter-Efficient Fine-Tuning, PEFT）技术的一种。在不改变原模型能力的前提下，用极少资源快速让模型学会新技能。核心思想是：“冻结”庞大的原始模型不动，只在旁边添加一个极小的“插件”进行训练。
- **LSB**: Least Significant Bit 最低有效位.
- **LUT**: Lookup Table 查找表。

## M

- **MAC tree**: Multiply-Accumulate Tree 乘加树.
- **ML**: Machine Learning 机器学习.
- **MoE**: Mixture of Experts 混合专家模型.
- **Multi-casting**: 在 AI 编译器领域，指将一份数据（如一个张量、一个权重矩阵、一个激活值）同时分发到多个计算单元（如Matrix Unit、Vector Unit、或者不同的Bank），让它们并行处理，而不需要复制多份数据占用额外存储。

## N

- **NP-hard**: 非确定性多项式时间困难。

## O

- **outline**: 将程序中的一段代码（通常是一个独立的代码区域）提取出来，封装成一个单独的函数。

## P

- **Pareto Optimality**: 帕累托最优. 在不使任何一个目标变差的前提下，已经无法再改进其中任何一个目标的状态。
- **Pass-through**: 透传, 指一个组件或层级在传递数据时，不对数据的内容进行解释、
  转换或验证，只是单纯地把它转发给下一级.
- **PCIe**: Peripheral Component Interconnect Express 高速串行计算机扩展总线标准。
- **popc**: Population Count 种群计数。硬件指令，统计一个二进制数中“1”的个数。这个操作在计算机科学里也被称为汉明重量（Hamming weight）。POPC 把原本可能需要多条软件指令才能完成的操作，用一条指令在一个时钟周期内完成，这能极大地提升特定算法的执行效率。

## R

- **RTL**:
    - Register Transfer Language 寄存器传输语言.
    - Register Transfer Level 寄存器传输级.

## S

- **Scoreboard**: 是计算机体系结构中一种用于实现指令乱序执行（Out-of-Order Execution）的硬件调度机制。Scoreboard 是一个集中式的硬件表格，它动态跟踪每条指令所需的操作数是否就绪、功能单元是否空闲，从而允许指令在满足条件时提前执行，而不是死板地按程序顺序执行。
- **SDF**: Synchronous Data Flow 同步数据流.
- **SPEC**: 规范驱动开发.
- **SPIR-V**: 是一个开放标准的、跨平台的二进制中间语言，
  专门用于表示并行计算和图形学任务，比如着色器（Shader）和计算内核（Compute Kernel）。
- **Superlane**: TSP 芯片内部一种高度对称、功能完整的计算单元组合。
- **Superscalar**: 超标量, 是一种微架构设计技术，而不是编译技术。超标量指的是处理器内核能够在同一个时钟周期（Cycle）内，通过多条并行的流水线（功能单元），同时发射（Issue）并执行多条独立的指令。这些指令必须没有数据依赖性（即不能读写同一个寄存器/内存地址）。如果第二条指令依赖第一条的计算结果，即使硬件有能力并行，也只能等待。
- **Systolic Array**: 脉冲阵列. 是一种为了高效执行矩阵乘法、卷积这类计算密集型任务而专门设计的并行计算硬件架构。

## T

- **TLP**: Thread-Level Parallelism 线程级并行.
- **TTA**: Transport Triggered Architecture 传输触发架构.

## W

- **WASM**: WebAssembly 是一种可移植、体积小、加载快且安全的二进制指令格式。

## 其他

- **寄存器重命名**: 将指令中的寄存器映射到实际的物理寄存器。
- **内核编译**: AI编译器中的内核编译，是将高层级的AI模型描述(如PyTorch的计算图)，
  转化为能在特定硬件（如GPU或Groq LPU）上极致高效运行的、
  专门定制的底层计算内核（Kernel）的过程。
- **启发式算法**: 找到足够好（可接受）的解。

