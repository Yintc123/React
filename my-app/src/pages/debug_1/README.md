# Debug_1
## Introduction
與 video element 相關的 Error
## Directories
* Page1 - Debug 實作
* Page2 - Bug_1 實作 
* Page3 - Bug_2 實作
## BUG_1
Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
### Problems：
當瀏覽器在 loading 影片資源的時候，被 video.pause() 中斷。當執行 video.play() 且幾乎同時執行 video.pause() 即會發生此錯誤。
### Solution：
由於 video.play() 為非同步的函式，等待其回傳 promise 再接著執行 video.pause()。
### Reference：
<ol>
    <li>https://developer.chrome.com/blog/play-request-was-interrupted/</li>
    <li>https://stackoverflow.com/questions/36803176/how-to-prevent-the-play-request-was-interrupted-by-a-call-to-pause-error</li>
    <li>https://bugs.chromium.org/p/chromium/issues/detail?id=593273</li>
</ol>

## BUG_2
Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
### Problems：
自動播放影片或音源未預設靜音。
### Solution：
將 video element 加上 muted 屬性並且設定為 "muted"。</br>
自動播放政策（The Autoplay Policy）於 2018 年發布於 Chrome 66 版本，為了改善使用者瀏覽網頁的體驗、減少使用者安裝廣告阻擋器的動機以及減少傳輸資料流量的消耗。自動播放政策主要有以下四點：
* 預設靜音模式
* 允許有聲的自動播放的條件為：
    1. 使用者曾經與此網站互動過
    2. 使用者曾經於此網站播放有聲影片
    3. 行動裝置的使用者將該網頁加入行動裝置的主介面或是安裝 PWA （響應式網頁應用程式）的電腦使用者
* 設定允許 iframe 有聲自動播放
### Reference：
<ol>
    <li>https://stackoverflow.com/questions/49930680/how-to-handle-uncaught-in-promise-domexception-play-failed-because-the-use</li>
    <li>https://developer.chrome.com/blog/autoplay/</li>
</ol>

### <a href="https://github.com/Yintc123/React">Home</a>