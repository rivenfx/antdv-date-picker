. '.\common.ps1'



Set-Location ..


# 还原
npm ci

# 编译
npm run build


Set-Location ./build

if ($Error.Count -eq 0) {
  exit 0
}
else {
  exit 1
}
