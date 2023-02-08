import React from 'react';
import {  Link } from "react-router-dom";
import './NavigationBar.css'
import ReactDOM from 'react-dom'

const NavigationBar= () =>{
    const moveSelector = (e) =>{
        const newActive = e.target.parentNode;
        const oldActiveNode = document.getElementsByClassName("active")[0];
        oldActiveNode.classList.remove("active");
        newActive.classList.add("active");

        const newPos = newActive.offsetLeft;
        const selector = document.getElementsByClassName("selector")[0];
        selector.style.left = newPos + "px";

    }

    return (
        <div id="navBar">
            <ul>
                <div className="selector">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <div className="item active">
                    <Link to="/" onClick={moveSelector.bind(this)}>Home</Link>
                </div>
                <div className="item">
                    <Link to="/login" onClick={moveSelector.bind(this)}>Login</Link>
                </div>
                <div className="item">
                    <Link to="/register" onClick={moveSelector.bind(this)}>Register</Link>
                </div>
            </ul>
        </div>
    );
}
export default NavigationBar;