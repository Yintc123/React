# gh-pages
## Introduction
此套件可以讓使用者於 GitHub Pages 部署自己的 SPA 專案。
## Setup
- package.json 設置 "homepage"：加入 GitHub Pages 的網址（如下圖）</br>
![homepage](../pictures/gh-pages/homepage.jpg)
- package.json 設置 "scripts"：加入一指令 deploy（如下圖）</br>
![scripts](../pictures/gh-pages/scripts.jpg)
- 於 index.html 的 head 標籤設置一段 JavaScript［<a href="https://github.com/Yintc123/React/blob/main/my-app/public/index.html">Goto</a>］
- 新增一 404.html［<a href="https://github.com/Yintc123/React/blob/main/my-app/public/404.html">Goto</a>］

## steps
1. npm run build（將專案打包至 build 資料夾）
2. npm run deploy（將專案部署至 Github Pages）
## Reference
<ol>
    <li>https://github.com/rafgraph/spa-github-pages</li>
    <li>https://timtnlee.me/post/github-pages-spa/</li>
</ol>

## <a href="https://github.com/Yintc123/React">HOME</a>