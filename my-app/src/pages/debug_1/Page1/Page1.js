import React from "react";
import "./Page1.css";
import Description from "../../../components/Description/Description";
import VideoObj from "../../../components/VideoObj/VideoObj";

const Page1 = () => {

    const title = "Error：Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().";
    const content = "瀏覽器在 loading 影片資源的時候，被 pause 中斷。";

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