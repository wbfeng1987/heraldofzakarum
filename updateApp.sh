#!/bin/bash
# 网站的根目录
APP_PATH='/root/heraldofzakarum'
 
echo "start deployment"
cd $APP_PATH
echo "fetching from remote..."
# 为了避免冲突，强制更新本地文件
git fetch --all
git reset --hard origin/master
echo "done"