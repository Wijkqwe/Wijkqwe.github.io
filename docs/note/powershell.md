# PowerShell

Windows10 中，`powershell` 默认无法执行脚本，需修改策略。
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### 文件批量重命名

```bash
Get-ChildItem -Filter "qwerty*" | Rename-Item -NewName { $_.Name -replace '^qwerty', 'asd' }
```


