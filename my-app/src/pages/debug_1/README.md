# Debug_1
## Introduction
與 video element 相關的 Error
## Directories
* Page1 - Debug
* Page2 - Bug_1 實作 
* Page3 - Bug_2 實作
## BUG_1
Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
### Problems
當瀏覽器在 loading 影片資源的時候，被 video.pause() 中斷，當執行 video.play() 且幾乎同時執行 video.pause() 即會發生此錯誤。

### Solution
由於 video.play() 為非同步的函式，等待其回傳 promise 再接著執行 video.pause()。

### Reference

<ol>
    <li>https://developer.chrome.com/blog/play-request-was-interrupted/</li>
    <li>https://bugs.chromium.org/p/chromium/issues/detail?id=593273</li>
</ol>

### <a href="https://github.com/Yintc123/React">Home</a>