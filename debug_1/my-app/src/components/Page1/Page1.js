import React from "react";
import "./Page1.css";
import Description from "../Description/Description";
import VideoObj from "../VideoObj/VideoObj";

const Page1 = () => {

    const title = "test";
    const content = "test";

    return (
        <div id="page1">
            <div className="page1__container">
                <Description title={title} content={content}/>
                <VideoObj/>
            </div>
        </div>
    )
}

export default Page1;