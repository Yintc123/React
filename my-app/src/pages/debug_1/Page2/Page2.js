import React from "react";
import "./Page2.css";
import VideoObj from "../../../components/VideoObj/VideoObj";

const Page2 = () => {

    const flag = 1; // flag=0，實作 debug；flag=1，實作 error
    const muted = "muted"; // muted，實作 debug；null，實作 error

    return (
        <div id="page2">
            <div className="page2__container">
                <VideoObj flag={flag}/>
            </div>
        </div>
    )
}

export default Page2;