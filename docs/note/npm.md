# npm

- `npm install`
    - `--package-lock-only`: 仅更新 `package-lock.json`.
    - `--save`: 将包添加到 package.json 的 dependencies.
- `npm get registry`: 查看软件包源.
- `npm list [--depth=0]`: 查看局部包.
    - `-g`: 查看全局包.
- `npm audit`: 查看当前环境漏洞详情.
    - `fix`: 尝试自动修复.
        - `--force`: 强制修复, 存在风险.

