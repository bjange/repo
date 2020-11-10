#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build

cd docs/.vuepress/dist
# 自定义域名
# echo 'blog.georges.top' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:bjange/repo.git
else
  msg='Automatic deployment from github actions'
  githubUrl=https://bjange:${GITHUB_TOKEN}@github.com/bjange/repo.git
  git config --global user.name "xueen_dai"
  git config --global user.email "daixueen@hotmail.com"
fi

git init
git checkout -b gh-pages
git add -A
git commit -m "${msg}"
git push -f $githubUrl gh-pages:gh-pages # 推送到github

# deploy to coding
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  # codingUrl=git@e.coding.net:xgy/xgy.git
# else
  # codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist