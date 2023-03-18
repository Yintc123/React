import React from "react";
import "./Page3.css";
import Description from "../../../components/Description/Description";
import VideoObj from "../../../components/VideoObj/VideoObj";

const Page3 = () => {

    const title = "Error：Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.";
    const content = "自動播放影片或音源未預設靜音。";

    const flag = 0; // flag=0，實作 debug；flag=1，實作 error
    const muted = null; // muted，實作 debug；null，實作 error

    return (
        <div id="page3">
            <div className="page3__container">
                <Description title={title} content={content}/>
                <VideoObj flag={flag} muted={muted}/>
            </div>
        </div>
    )
}

export default Page3;