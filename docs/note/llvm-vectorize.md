# Vectorize

- [Auto-Vectorization](https://llvm.org/docs/Vectorizers.html#loop-vectorizer)
- [Vectorization Plan](https://llvm.org/docs/VectorizationPlan.html)

## The Loop Vectorizer

在 `-O2` `-O3` 中默认开启, 可通过 `-fno-vectorize` 关闭.

- 向量化宽度
    - `-mllvm -force-vector-width=4`: 编译选项1级强制命令
    - `#pragma clang loop vectorize_width(4)`: 源码级的建议(hint), 编译器可以因成本模型不划算或合法性不满足而忽略

