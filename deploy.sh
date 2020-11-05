#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

SHELL_FOLDER=$(cd "$(dirname "$0")";pwd)
echo '当前路径1：'+ $SHELL_FOLDER
# 进入生成的文件夹/home/runner/work/repo/repo/docs/.vuepress/dist/
cd docs/.vuepress/dist

SHELL_FOLDER2=$(cd "$(dirname "$0")";pwd)
echo '当前路径1：'+$SHELL_FOLDER2


for file_a in ${SHELL_FOLDER2}/*
do  
    temp_file=`basename $file_a`  
    echo 'dist目录:' + $temp_file  
done


# 如果是发布到自定义域名
#echo 'xugaoyi.com' > CNAME

# 如果发布到 https://<USERNAME>.github.io
  # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
  # git push -f git@github.com:bjange/bjange.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
  # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
  # git push -f git@github.com:bjange/repo.git master:gh-pages
  #创建gh-pages分支,s 通过github page/你项目的名称就可以访问到那个分支的静态文件


if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:bjange/repo.git
else
  msg='来自github actions的自动部署'
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
for file_a in ${SHELL_FOLDER2}/*
do  
    temp_file=`basename $file_a`  
    echo 'dist目录222:' + $temp_file  
done
cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist