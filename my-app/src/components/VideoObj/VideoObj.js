import React, { useEffect } from "react";
import "./VideoObj.css";

const VideoObj = () => {
    useEffect(() => {
        const video = document.querySelector("#videoObj__video");
        console.log(video);
        video.play();
        video.pause();
    }, [])
    return (
        <video id="videoObj__video" controls muted="muted">
            <source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4"></source>
        </video>
    )
}

export default VideoObj;