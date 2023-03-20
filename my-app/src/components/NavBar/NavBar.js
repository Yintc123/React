import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div id="navBar">
            <ul className="navBar__ul">
                <li className="navBar__li"><a className="navBar__a" href="/React/">Home</a></li>
                <li className="navBar__li"><a className="navBar__a" href="/React/page1">Page1</a></li>
                <li className="navBar__li"><a className="navBar__a" href="/React/page2">Page2</a></li>
                <li className="navBar__li"><a className="navBar__a" href="/React/page3">Page3</a></li>
            </ul>
        </div>
    )
}

export default NavBar;