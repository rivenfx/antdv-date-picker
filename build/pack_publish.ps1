. '.\common.ps1'

Set-Location ..


## 删除根目录下的 package.json
Remove-Item -Path './package.json'
Copy-Item  -Force -Path './packages/package.json' -Destination './package.json'

## 替换版本号
$tag = $env:TAG
$content = ReadFile './package.json'
$content = $content -creplace [Regex]::Escape('0.0.0-PLACEHOLDER'), $tag
WriteFile -Path './package.json' -Content $content

# 发布
npm publish

Set-Location ./build

if ($Error.Count -eq 0) {
  exit 0
}
else {
  exit 1
}


