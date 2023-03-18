# React
## Debug
### Debug_1
與 video element 相關的 Error
* Error：Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
* Error：Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.</br>
Path：<a href="https://github.com/Yintc123/React/tree/main/my-app/src/pages/debug_1">./my-app/src/pages/debug_1</a>

## Dependencies
此專案使用到的套件
<ol>
    <li>react-router-dom@5.2.0：React 的前端路由套件，使專案以 SPA 的形式呈現。</li>
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
1. https://medium.com/itsems-frontend/nodejs-npm-dependencies-devdependencies-8934f641c8ef
2. https://stackoverflow.com/questions/19578796/what-is-the-save-option-for-npm-install
