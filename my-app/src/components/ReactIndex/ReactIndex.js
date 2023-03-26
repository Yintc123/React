import React from "react";
import "./ReactIndex.css"
import logo from "../../logo.svg";
import ImageObj from "../ImageObj/ImageObj";

const ReactIndex = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
      </header>

    )
}

export default ReactIndex;