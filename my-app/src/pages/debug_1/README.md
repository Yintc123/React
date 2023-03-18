# BUG
Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
## Problems
當瀏覽器在 loading 影片資源的時候，被 video.pause() 中斷，當執行 video.play() 且幾乎同時執行 video.pause() 即會發生此錯誤。

## Solution
由於 video.play() 為非同步的函式，等待其回傳 promise 再接著執行 video.pause()。

## Reference

<ol>
    <li>https://developer.chrome.com/blog/play-request-was-interrupted/</li>
    <li>https://bugs.chromium.org/p/chromium/issues/detail?id=593273</li>
</ol>

## Dependencies
此專案使用到的套件
<ol>
    <li>react-router-dom@5.2.0：React 的前端路由套件，使專案以 SPA 的形式呈現。</li>
</ol>

