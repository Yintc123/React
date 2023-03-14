import React from "react";
import "./VideoObj.css";

const VideoObj = () => {
    return (
        <video className="videoObj__video" controls>
            <source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4"></source>
        </video>
    )
}

export default VideoObj;