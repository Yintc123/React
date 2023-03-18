import React from "react";
import "./Description.css";

const Description = (props) => {
    return (
        <div id="description">
            <h1 className="description__title">{props.title}</h1>
            <div className="description__content">{props.content}</div>
        </div>
    )
}

export default Description;