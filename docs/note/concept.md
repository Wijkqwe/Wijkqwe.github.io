# 基础概念

## A

- **aarch64**: ARM 架构.
- **AGI**: Artificial General Intelligence 通用人工智能.
- **AGU**: 地址生成单元. 处理器内部专门负责计算和生成内存访问地址的硬件单元.
  可与 ALU 并行.
- **AI Infra**: 
- **Antichain**: 反链, 是图论(特别是偏序集理论)中的一个重要概念.
- **ASIC**: Application-Specific Integrated Circuit 专用集成电路.
- **Attention Mechanism**: 注意力机制, 是当今几乎所有主流大模型(如GPT、LLaMA、
  DeepSeek)最核心的底层技术.可以通俗地理解为一种让模型在处理信息时“抓重点、
  懂关联”的能力.
- **AVX**: Advanced Vector Extensions 高级向量扩展.
  Intel 随 Sandy Bridge 推出的指令集.

## B

- **Backpressure**: 是计算机系统中一种流量控制机制.它指的是：当下游处理单元
  (Consumer)处理速度跟不上上游(Producer)的数据发送速度时,
  下游会反过来向上游发送一个信号, 让上游暂停或减速发送数据.
- **Bank**: 是指将大容量的存储资源(如内存、缓存、寄存器文件)划分为多个独立的、
  可以并行访问的小单元.每个小单元就是一个Bank.
- **Bleeding-edge**: 指的是采用最新、最前沿, 但尚未经过充分测试的技术、
  框架或工具.
- **BMM**: Batch Matrix Multiplication 批量矩阵乘法.
- **BSP**: Bulk Synchronous Parallel 批量同步并行.

## C

- **C2C**: Chip-to-Chip, 芯片到芯片. 将两颗或两颗以上独立制造、已经切割好的芯片,
  通过某种方式连接在一起, 共同工作, 以实现更强大或更复杂的系统功能.
- **CFG**: Control Flow Graph 控制流图.
- **CFI**: LLVM Flang 中 C 与 Fortran 互操作的基石.
- **CIM**: Computing-in-Memory 存内计算.
- **Clause**: 子句 / 子语. 是附加在 Directive 后面的“修饰语”, 用来告诉编译器
  “以什么方式”、“在什么条件下”、“对哪些变量”执行这个 Directive.
- **CMOS**: Complementary Metal-Oxide-Semiconductor 互补金属氧化物半导体.
  既是一种半导体制造工艺, 也是一种电路设计风格, 是现代数字芯片(CPU、GPU、AI 芯片、内存)最基础的构建单元.
- **CNN**: Convolutional Neural Network 卷积神经网络.
- **CoT**: Chain of Thought 思维链.
- **CP0**: Co-processor 0 协处理器 0. MIPS 架构中集成在 CPU 核心内部的一组专用寄存器.
  负责管理处理器最核心的系统功能, 包括: 内存管理、异常处理和中断控制.
- **CEFR**: 英语语言级别.
- **CSE**: Common Subexpression Elimination 公共子表达式消除.
- **CSP**: 约束满足问题.不关心“最优”, 只关心“能不能找到一组赋值,
  让所有约束都同时满足”.
- **CSR**: Compressed Sparse Row 压缩稀疏行. 用于高效存储稀疏矩阵.

## D

- **DCE**: Dead Code Elimination 死代码消除.
- **DCU**: Deep Compute Unit 深度计算单元. 特指海光信息(Hygon)研发的 GPGPU 架构 AI 加速卡.
- **DFA**: 确定性有限自动机.
- **Directive**: 编译指令 / 指示符. 源码中的特殊标记, 用来指导编译器、预处理器或运行时系统如何处理代码.
- **DL**: Deep Learning 深度学习.
- **DLP**: Data-Level Parallelism 数据级并行.
- **DRR**: Declarative Rewrite Rules 声明式重写规则. 是 MLIR
  框架中一个配套的核心机制.
  > Declarative, rule-based pattern-match and rewrite.
- **DSL**: Domain-Specific Language 领域特定语言.
- **DSO**: Dynamic Shared Object 动态共享对象. 即动态链接库.
- **DSP**: Digital Signal Processor 数字信号处理器,
  是一种专门为快速处理连续数字信号流(如声音、图像、雷达回波)而设计的微处理器.
- **DWARF**: 一种标准化的调试信息格式.

## E

- **EOS**: End of Sequence 序列结束符.

## F

- **False Positive**: 将正常误报为异常.
- **FP16**: Floating-Point 16-bit 16位浮点数.

## G

- **GDSII**: Graphic Design System II 图形设计系统二代是芯片设计领域最关键、
  应用最广泛的数据库文件格式.
- **GeMM**: General Matrix Multiply 通用矩阵乘法.
- **GPR**: General Purpose Register 通用寄存器.
- **GSoC**: Google Summer of Code. 由 Google 主办的一项全球性线上开源编程项目.
  竞争激烈.

## H

- **HBM**: 高带宽内存.
- **HM 算法**: Hindley-Milner 算法, 
  是一套为程序自动推导出最通用类型的经典类型推理算法.它也被称为Damas-Milner算法.
- **HPC**: High-Performance Computing 高性能计算.

## I

- **IaaS**: Infrastructure as a Service 基础设施即服务.
- **IC**: Integrated Circuit 集成电路.
- **ICU**: Instruction Control Unit 指令控制单元.
- **ILP**:
    - 指令级并行.
    - Integer Linear Programming 整数线性规划.在线性约束条件下, 求整数决策变量的最优解
      (最大化或最小化某个目标).
- **infra**: Infrastructure 基础设施.
- **Intrinsics**: 内联函数/内置函数.
    - 在编译器 (如LLVM, GCC) 的语境下, 指的是编译器提供的一组看起来像函数, 
    但实际会直接映射为特定硬件指令的特殊API.
- **IPC**:
    - Instructions Per Cycle 每周期指令数.
    - Inter-Process Communication 进程间通信.
- **ISA**: Instruction Set Architecture 指令集架构.
- **ISel**: Instruction Selection 指令选择.是编译器将平台无关的中间表示(IR)
  转换为目标机器(如x86、ARM、GPU)特有的指令过程中的第一个关键步骤.
- **Itinerary**: 时空路径。指的是一条预先规划好的、
  数据或指令在芯片内部各计算单元（如ALU、Matrix Unit、Bank）
  之间移动的完整路径和时间表。
  可以被理解为一个“时空路线图”——不仅指明数据要去哪里（空间路径），
  还精确规定了何时出发、何时到达（时间表）。通过反链分析，
  将冲突的操作分配到不同时钟周期，彻底消除 Bank 冲突。

## L

- **live in**: region 外的变量在 region 内被用到.
- **LoRA**: Low-Rank Adaptation 低秩适配.属于参数高效微调(Parameter-Efficient
  Fine-Tuning, PEFT)技术的一种.在不改变原模型能力的前提下,
  用极少资源快速让模型学会新技能.核心思想是：“冻结”庞大的原始模型不动, 
  只在旁边添加一个极小的“插件”进行训练.
- **LSB**: Least Significant Bit 最低有效位.
- **LSTM**: Long Short Term Memory 长短期记忆网络.
- **LTO**: Link-Time Optimization 链接时代码优化.
- **LUT**: Lookup Table 查找表.

## M

- **MaaS**: Model as a Service 模型即服务.
- **MAC tree**: Multiply-Accumulate Tree 乘加树.
- **ML**: Machine Learning 机器学习.
- **MLA**: Multi-Head Latent Attention 多头潜在注意力. DeepSeek 系列模型中提出的一种高效注意力机制.
- **MLLM**: Multimodal Large Language Model 多模态大语言模型.
- **MLP**: Multi-Layer Perceptron 多层感知机. 在 Transformer 中, MLP 通常指前馈网络(FFN, Feed-Forward Network), 是每个 Transformer 层中紧随注意力之后的第二个子层.
- **MMA**: Matrix Multiply-Accumulate 矩阵乘加.
- **MMX**: MultiMedia Extensions 多媒体扩展. Intel 随 Pentium 处理器推出的一项
  SIMD 指令集扩展.
  包含 8 个 64 位寄存器(MM0-MM7), 直接复用了 x87 浮点运算单元(FPU)的 8 个 80
  位数据寄存器的低 64 位.
- **MoE**: Mixture of Experts 混合专家模型.
- **MPI**: Message Passing Interface 消息传递接口.
- **Multi-casting**: 在 AI 编译器领域, 指将一份数据(如一个张量、一个权重矩阵、
  一个激活值)同时分发到多个计算单元(如Matrix Unit、Vector Unit、或者不同的Bank),
  让它们并行处理, 而不需要复制多份数据占用额外存储.

## N

- **NEON**: ARM 随 ARM Cortex-A8（2005）推出的 SIMD 指令集.
- **NFA**: 非确定性有限自动机.
- **NoC**: Network-on-Chip 片上网络.
- **NP-hard**: 非确定性多项式时间困难.

## O

- **ODR**: One Definition Rule 单一定义规则.
  > C++ 在头文件中定义变量和函数时容易违反 ODR.
- **ODS**: Operation Definition Specification 操作定义规范. 是一套基于 TableGen
  语言的 DSL, 是 MLIR 框架中一个非常核心的声明式定义机制.
- **OOD**: Out-of-Distribution 分布外. 用于评估模型可靠性.
- **OoO**: Out of Order Execution 乱序执行.
- **outline**: 将程序中的一段代码(通常是一个独立的代码区域)提取出来,
  封装成一个单独的函数.

## P

- **PaaS**: Platform as a Service 平台即服务.
- **Pareto Optimality**: 帕累托最优. 在不使任何一个目标变差的前提下,
  已经无法再改进其中任何一个目标的状态.
- **Pass-through**: 透传, 指一个组件或层级在传递数据时, 不对数据的内容进行解释、
  转换或验证, 只是单纯地把它转发给下一级.
- **PCIe**: Peripheral Component Interconnect Express 高速串行计算机扩展总线标准.
- **Phi 操作**(Φ/φ 函数): 用来解决问题: 当一个变量在程序的控制流汇合处(比如
  if-else 之后)拥有多个可能的定义来源时, 如何明确地“选择”正确的那个.
- **PIM**: Processing-in-Memory 存内处理.
  在 SSA 中尤为重要.
- **PM**: Product Manager 产品经理.
- **popc**: Population Count 种群计数.硬件指令, 统计一个二进制数中“1”的个数.
  这个操作在计算机科学里也被称为汉明重量(Hamming weight).POPC 
  把原本可能需要多条软件指令才能完成的操作, 用一条指令在一个时钟周期内完成, 
  这能极大地提升特定算法的执行效率.
- **Predicate Functions**: 谓词函数.
- **Predicate Loops**: 谓词循环.
- **PRD**: Product Requirements Document 产品需求文档.

## Q

- **QCL**: Quantum Computation Language 量子计算语言. 属于命令式量子编程语言.
- **QLC**: Quad-Level Cell 四层存储单元. NAND 闪存(SSD) 的一种类型.

## R

- **RA**: Register Allocation 寄存器分配.
- **RIG**: Register Interference Graph 寄存器干涉图. 是编译器在寄存器分配
  (Register Allocation) 阶段使用的一种核心数据结构. RIG 是一个无向图,
  用于描述程序中哪些变量(或临时值)的"生命周期"存在重叠, 从而不能共享同一个物理寄存器.
- **RNN**: Recurrent neural network 循环神经网络.
- **ROI**: Return on Investment 投资回报率.
- **RoundTrip**: 往返转换, 是将数据从格式 A 转换为格式 B, 再从格式 B 转换回格式
  A, 然后验证转换后的结果是否与原始数据完全一致的过程.
- **RP**: Register Pressure 寄存器压力. 指程序在某个执行点, 需要同时存放在寄存器中的活跃变量数量,
  超过了硬件实际可提供的寄存器数量, 从而迫使编译器将部分变量"溢出(Spill)"到内存中.
- **RST**: reStructuredText 文件后缀, 是用于创建文档的轻量级标记语言. 相比于 md
  文件, 语法更严格, 结构更严谨.
- **RTL**:
    - Register Transfer Language 寄存器传输语言.
    - Register Transfer Level 寄存器传输级.
- **RTOS**: Real-time operating system 实时操作系统.
- **RT-Thread**: 一个开源 RTOS.
- **RTTI**: Run-Time Type Information 运行时类型信息.

## S

- **SaaS**: Software as a Service 软件即服务.
- **Sanity check**: 健全性检查.
- **SAXPY**: Scalar Alpha X Plus Y. 是 BLAS(基础线性代数子程序库)中的一种基础运算.
  是衡量硬件性能和编译器优化能力的标尺.
- **Scope**: 是程序中一个名字(变量、函数、类型)能够被有效引用和访问的代码区域.
- **Scoreboard**: 是计算机体系结构中一种用于实现指令乱序执行(Out-of-Order
  Execution)的硬件调度机制.Scoreboard 是一个集中式的硬件表格,
  它动态跟踪每条指令所需的操作数是否就绪、功能单元是否空闲,
  从而允许指令在满足条件时提前执行, 而不是死板地按程序顺序执行.
- **SDF**: Synchronous Data Flow 同步数据流.
- **SLP**: Superword Level Parallelism 超字级并行.
- **SNR**: Script Number Register 脚本编号寄存器.
- **SPEC**: 规范驱动开发.
- **SPIR-V**: 是一个开放标准的、跨平台的二进制中间语言,
  专门用于表示并行计算和图形学任务, 比如着色器(Shader)和计算内核(Compute Kernel).
- **SSA**: Static Single Assignment 静态单赋值.
- **SSE**: Streaming SIMD Extensions 流式 SIMD 扩展.
  Intel 随 Pentium III 推出的指令集. 8 个 128 位寄存器, 不再复用 FPU.
- **SSG**: Static Site Generation 静态站点生成.
- **Superlane**: TSP 芯片内部一种高度对称、功能完整的计算单元组合.
- **Superscalar**: 超标量, 是一种微架构设计技术, 而不是编译技术.
  超标量指的是处理器内核能够在同一个时钟周期(Cycle)内, 通过多条并行的流水线
  (功能单元), 同时发射(Issue)并执行多条独立的指令. 这些指令必须没有数据依赖性
  (即不能读写同一个寄存器/内存地址). 如果第二条指令依赖第一条的计算结果,
  即使硬件有能力并行, 也只能等待.
- **SVG**: Scalable Vector Extension 可伸缩向量扩展. Arm 架构中一种 SIMD 指令集.
- **Systolic Array**: 脉冲阵列. 是一种为了高效执行矩阵乘法、卷积这类计算密集型任务而专门设计的并行计算硬件架构.

## T

- **TCO**: Total Cost of Ownership 总拥有成本.
  指一个系统或产品从采购到报废的全生命周期内, 所有相关成本的总和.
- **TII**: TargetInstrInfo in LLVM llvm/include/llvm/CodeGen/TargetInstrInfo.h.
- **TLE**: Triton Language Extensions. FlagTree 中引入的分层语言扩展体系.
- **TLI**: TargetLowering in LLVM llvm/include/llvm/CodeGen/TargetLowering.h.
- **TLP**: Thread-Level Parallelism 线程级并行.
- **TMA**: Tensor Memory Accelerator 张量内存加速器. NVIDIA 从 Hopper 架构开始引入的一个专用硬件引擎.
- **ToB**: To Business.
- **ToC**: To Consumer.
- **TSP**: Tensor Streaming Processor.
- **TTA**: Transport Triggered Architecture 传输触发架构.
- **TTD**: Tensor-Train Decomposition 张量列分解.
- **TTFB**: Time To First Byte 首字节时间.
  表示从客户端发出请求, 到收到服务器返回的第一个字节数据所经历的时间.
- **TTS**: Text-to-Speech 文本转语音.

## U

- **ULP**: Unit in the Last Place 最后一位单位.
  ULP 是浮点数在某个数值附近, 两个相邻可表示数之间的间距. 它代表了该浮点数格式在该量级下能分辨的最小精度单位.

## V

- **Variable mutation**: 变量突变. 指的是程序中的变量在初次赋值后,
  其值可以被再次修改的特性.
- **VLA**: Vision-Language-Action 视觉-语言-动作. 它是当前具身智能和机器人学习领域的模型架构之一.
- **VLM**: Vision-Language Model 视觉-语言模型.

## W

- **WAM**: World Action Model 世界行动模型. 机器人学习和具身智能领域的模型架构之一.
- **WASM**: WebAssembly 是一种可移植、体积小、加载快且安全的二进制指令格式.

## X

- **XaaS**: Everything as a Service 一切皆服务.
  云计算的核心思想: 把任何 IT 能力都封装成"按需付费的服务".
  有多种衍生模式.

## 其他

- **端侧**: 通常指"终端设备一侧". 计算和数据处理发生在设备本地, 而不是发送到云端.
- **寄存器重命名**: 将指令中的寄存器映射到实际的物理寄存器.
- **内核编译**: AI编译器中的内核编译, 是将高层级的AI模型描述(如PyTorch的计算图), 
  转化为能在特定硬件(如GPU或Groq LPU)上极致高效运行的、
  专门定制的底层计算内核(Kernel)的过程.
- **启发式算法**: 找到足够好(可接受)的解.

