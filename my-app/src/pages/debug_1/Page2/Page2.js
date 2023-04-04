import React from "react";
import "./Page2.css";
import Description from "../../../components/Description/Description";
import VideoObj from "../../../components/VideoObj/VideoObj";

const Page2 = () => {

    const title = "Error：Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().";
    const content = "瀏覽器在 loading 影片資源的時候，被 videoElem.pause() 中斷。";
    const note = "註：開啟開發人員工具的主控台即會顯示錯誤於主控台";

    const flag = 1; // flag=0，實作 debug；flag=1，實作 error
    const muted = true; // true，實作 debug；false，實作 error

    return (
        <div id="page2">
            <div className="page2__container">
                <Description title={title} content={content} note={note}/>
                <VideoObj flag={flag} muted={muted}/>
            </div>
        </div>
    )
}

export default Page2;