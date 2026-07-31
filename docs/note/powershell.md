
### 文件批量重命名

Get-ChildItem -Filter "qwerty*" | Rename-Item -NewName { $_.Name -replace '^qwerty', 'asd' }


