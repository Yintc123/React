# React
紀錄開發 React 專案遇到的問題以及使用的套件。
## Debug
React 專案開發遇到的問題。
### Debug_1
與 video element 相關的 Error：
* Error：Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
* Error：Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.

Path：<a href="https://github.com/Yintc123/React/tree/main/my-app/src/pages/debug_1">./my-app/src/pages/debug_1</a>

## Dependencies
此專案使用到的套件：
<ol>
    <li>react-router-dom@5.2.0：React 的前端路由套件，使專案以 SPA 的形式呈現。</li>
    <li>gh-pages：搭配 GitHub Page 將前端專案於 GitHub 上線。（<a href="https://github.com/Yintc123/React/tree/main/my-app/public">Goto</a>）</li>
    <li>bootstrap：網站和網路應用程式開發的開源前端開發工具。（<a href="https://github.com/Yintc123/React#bootstrap">Goto</a>）</li>
    <li>react-bootstrap：整合 React 和 Bootstrap 的前端開發工具。</li>
</ol>

## Tips
### 安裝指定版本的套件
使用＂@＂加上指定版本，以 react-router-dom 套件的 v5.2.0 為例：
```
npm install --save react-router-dom@5.2.0
```
#### Parameter
--save：將套件加入至"正式環境"的相依套件中。
#### Reference
<ol>
    <li>https://medium.com/itsems-frontend/nodejs-npm-dependencies-devdependencies-8934f641c8ef </li>
    <li>https://stackoverflow.com/questions/19578796/what-is-the-save-option-for-npm-install </li>
</ol>

### Bootstrap
Bootstrap 為 CSS 框架，基於 HTML, CSS 和 JavaScript 並用於網站和網路應用程式開發的開源前端開發工具，提供多樣且預先建立的元件使開發者能快速開發響應式網頁（RWD，Responsive Web Design）。
#### react-bootstrap
整合 React 和 Bootstrap 的前端開發工具。
- 安裝 react-bootstrap
```Shell
npm install react-bootstrap bootstrap
```
- 於<a href="https://react-bootstrap.github.io/getting-started/introduction/">官方網站</a>搜尋專案需要的元件
- 於 JS 引入 Bootstrap 的 CSS 檔
```JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
```
#### Reference
<ol>
    <li>https://getbootstrap.com/docs/5.3/getting-started/introduction/</li>
    <li>https://tw.alphacamp.co/blog/bootstrap-4-introduction</li>
    <li>https://react-bootstrap.github.io/getting-started/introduction/ （react-bootstrap）</li>
    <li>https://ithelp.ithome.com.tw/articles/10252457 （react-bootstrap）</li>
</ol>
