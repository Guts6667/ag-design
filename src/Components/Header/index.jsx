import React from "react";
import "./Header.scss"

const Header = () => {
    return(
        <header className="container__header">
            <div className="container__header-smartphone">
                <div className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src="/assets/Logo-AG-Design.png" className="ag-logo" alt="Logo AG Design" />
                <a href="#contact" className="contact-icon">
                    <img src="/assets/icon-contact.png"  alt="" />
                </a>
                
            </div>
            <div className="container__header-desktop">

            </div>
        </header>
    )
}
export default Header;