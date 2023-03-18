import React from "react";
import "./Page1.css";
import ImageObj from "../ImageObj/ImageObj";
import VideoObj from "../VideoObj/VideoObj";

const Page1 = () => {
    return (
        <div id="page1">
            <div className="page1__container">
                <VideoObj/>
            </div>
        </div>
    )
}

export default Page1;