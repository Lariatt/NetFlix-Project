import React from 'react';
import Logo from "./580b57fcd9996e24bc43c529.png";
import User from "./Netflix-avatar.png";

export default ({black}) => {
    return(
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="#"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={User} alt="#"/>
                </a>
            </div>
        </header>
    )
}
