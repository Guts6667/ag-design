import React from "react";
import "./About.scss"


/**
 * Section About
 * @returns {JSX} React Component
 */
const About = () => {

    return(
        <section className="container__about" id="about">
            <div className="container__about-title">
                <img src="/assets/Alexiane-Grieu.png" alt="Portrait of Alexiane Grieu" />
                <h2>About me, an<br/> UX/UI Designer</h2>
            </div>
            <div className=" container__about-description">
                <p>
                Hello, I'm Alexiane Grieu!<br/><br/>
                Passionate for years by the digital world, I decided to start UX/UI design in 2022! In addition to my freelance webdesign services, I started a Product Manager training in September 2022.<br/><br/>
                In order to offer you a complete website creation offer, we have created, with my partner <a href="https://www.rayanchambet.com" target="_blank" rel="noopener noreferrer" className="text-grey">Rayan Chambet </a> (Software & Web developer), the BLOB agency.
                </p>
                <a href="https://blob-agency.com" target="_blank" rel="noopener noreferrer" className="btn-neumorphism text-grey"><span>Our website </span><img src="/assets/icon-arrow.png" alt="Icon Arrow" /></a>
            </div>
        </section>
    )
}

export default About;