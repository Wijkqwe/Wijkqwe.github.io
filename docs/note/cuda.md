# CUDA

[官网教程](https://docs.nvidia.com/cuda/archive/13.2.2/cuda-programming-guide/index.html#1)

## kernel

CUDA C++ 中对“在 GPU 上并行执行的函数”的专有称呼.

- 使用 `__global__` 限定符进行声明.
- 在 device 端执行, 通常在 host 端调用.
- 必须返回 void.

### launch

1. C++ 语法: 调用 kernel 时, 需在函数名和参数列表间插入 `<<<grid, block, sharedMem, stream>>>` 来指定配置.
  ```cpp
  kernel<<<gridDim, blockDim>>>(args...);
  ```
    - grid: 网格维度, 类型 `dim3` 或 `int`.
    - block: 线程块维度, 类型 `dim3` 或 `int`.
    - sharedMem: 可选.
    - stream: 可选.
1. Runtime API
1. Driver API

## type

### dim3

## 操作

### 填充元素

```cpp
if (TILE * sizeof(T) <= x) {
  return x / sizeof(T);
}
```
tile 总字节数不超过 x 字节时，将元素数提升到填满的粒度.

### 向上取整

x 向上取整到 tile 的整数倍.
```cpp
x = ((x + tile - 1) / tile) * tile;
```

