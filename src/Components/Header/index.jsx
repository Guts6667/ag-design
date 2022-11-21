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
            { isOpen && (
            <div className="container__navMenu">
                <nav>
                    <a href="#home" onClick={toggleBtn}><span>Home</span><img src="/assets/chevron-right.svg" alt="Chevron Right" /></a>
                    <a href="#about" onClick={toggleBtn}><span>About</span><img src="/assets/chevron-right.svg" alt="Chevron Right" /></a>
                    <a href="#portfolio" onClick={toggleBtn}><span>Portfolio</span><img src="/assets/chevron-right.svg" alt="Chevron Right" /></a>
                    <a href="#contact" onClick={toggleBtn}><span>Contact</span><img src="/assets/chevron-right.svg" alt="Chevron Right" /></a>
                </nav>
            </div>
            )}
            
        </header>
    )
}
export default Header;