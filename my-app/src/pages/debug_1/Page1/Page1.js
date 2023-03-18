import React from "react";
import "./Page1.css";
import Description from "../../../components/Description/Description";
import VideoObj from "../../../components/VideoObj/VideoObj";

const Page1 = () => {

    const title = "Error：Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().";
    const content = "瀏覽器在 loading 影片資源的時候，被 pause 中斷。";

    const muted = "muted"; // muted，實作 solution；null，實作 error
    const flag = 0; // flag=0，實作 solution；flag=1，實作 error

    return (
        <div id="page1">
            <div className="page1__container">
                <Description title={title} content={content}/>
                <VideoObj muted={muted} flag={flag}/>
            </div>
        </div>
    )
}

export default Page1;