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

## Steps
1. npm run build（將專案打包至 build 資料夾）
2. npm run deploy（將專案部署至 Github Pages）
## Reference
<ol>
    <li>https://github.com/rafgraph/spa-github-pages</li>
    <li>https://timtnlee.me/post/github-pages-spa/</li>
</ol>

## Tips
### 網頁轉址：
#### window.location.assign(assigned_new_URL)：網頁轉至指派的網址。
Example：
1. 目前頁面：https://google.com/
2. 於網址欄輸入：https://youtube.com/
2. F12 開啟開發者工具並且於主控台輸入：window.location.assign("https://example.com/")
3. 網頁導轉至：https://example.com/
4. 回上一頁：https://youtube.com/
#### window.location.replace(assigned_new_URL)：以指派的網址取代目前網址。
Example：
1. 目前頁面：https://google.com/
2. 於網址欄輸入：https://youtube.com/
2. F12 開啟開發者工具並且於主控台輸入：window.location.replace("https://example.com/")
3. 網頁導轉至：https://example.com/
4. 回上一頁：https://google.com/
### window.location.search：網址的 Query String
Example：
1. 目前頁面：https://example.com/?test=test
2. window.location.search：?test=test

### Reference
<ol>
    <li>https://originalix.github.io/2020/05/10/window.location%E7%94%A8%E6%B3%95%E8%AF%A6%E8%A7%A3/</li>
</ol>

## <a href="https://github.com/Yintc123/React">HOME</a>