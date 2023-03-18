import React from "react";
import "./Page1.css";
import VideoObj from "../../../components/VideoObj/VideoObj";

const Page1 = () => {

    const muted = "muted"; // muted，實作 debug；null，實作 error
    const flag = 0; // flag=0，實作 debug；flag=1，實作 error

    return (
        <div id="page1">
            <div className="page1__container">
                <VideoObj muted={muted} flag={flag}/>
            </div>
        </div>
    )
}

export default Page1;