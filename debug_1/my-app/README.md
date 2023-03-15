# BUG
Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
## Problems
video.pause interupts the process of loading video.
在 loading 影片資源的時候，被 pause 中斷。
## Reference

<ol>
    <li>https://developer.chrome.com/blog/play-request-was-interrupted/</li>
</ol>

## Dependencies
此專案使用到的套件
<ol>
    <li>react-router-dom@5.2.0：React 的前端路由套件，使專案以 SPA 的形式呈現。</li>
</ol>

