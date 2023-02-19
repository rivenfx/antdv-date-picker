# 读取文件 utf8
function ReadFile {
    param (
        $path
    )
    return Get-Content -Path $path -Encoding UTF8
}

# 写入文件 utf8
function WriteFile {
    param (
        $path,
        $content
    )
    Set-Content -Path $path  -Value $content -Encoding UTF8 -Force
}