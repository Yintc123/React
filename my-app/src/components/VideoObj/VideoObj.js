import React, { useEffect } from "react";
import "./VideoObj.css";

const VideoObj = (props) => {
    useEffect(() => {
        const video = document.querySelector("#videoObj__video");

        if (props.flag==0) {
            video.play().then(()=> {
                video.pause();
            })
        }else {
            video.play();
            video.pause();
        }
    }, [])
    return (
        <video id="videoObj__video" controls muted={props.muted}>
            <source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4"></source>
        </video>
    )
}

export default VideoObj;