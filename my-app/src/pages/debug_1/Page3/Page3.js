import React from "react";
import "./Page3.css";
import VideoObj from "../../../components/VideoObj/VideoObj";

const Page3 = () => {

    const flag = 0; // flag=0，實作 solution；flag=1，實作 error

    return (
        <div id="page3">
            <div className="page3__container">
                <VideoObj/>
            </div>
        </div>
    )
}

export default Page3;