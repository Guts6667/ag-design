import React, { useState } from "react";
import "./Header.scss"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleBtn = () => {
        const burger = document.querySelector('.burger');
        burger.classList.toggle("open");
        if(burger.classList.contains("open")){
            setIsOpen(true)
        } else{
            setIsOpen(false)
        }
    }
    return(
        <header className="container__header">
            <div className="container__header-smartphone">
                <div className="burger" onClick={toggleBtn}>
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
            <img src="/assets/Logo-AG-Design.png" className="ag-logo" alt="Logo AG Design" />
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
            </div>
        </header>
    )
}
export default Header;