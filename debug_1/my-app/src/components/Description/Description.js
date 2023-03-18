import React from "react";
import "./Description";

const Description = (props) => {
    return (
        <div id="description">
            <div className="description__title">{props.title}</div>
            <div className="description__content">{props.content}</div>
        </div>
    )
}

export default Description;