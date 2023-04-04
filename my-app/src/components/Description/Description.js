import React from "react";
import "./Description.css";

const Description = (props) => {
    return (
        <div id="description">
            <h3 className="description__title">{props.title}</h3>
            <div className="description__content">{props.content}</div>
            <p className="description__note">{props.note}</p>
        </div>
    )
}

export default Description;