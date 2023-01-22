import React from "react";
import "./Home.scss"

/**
 * Section Home
 * @returns {JSX} React Component
 */
const Home = () => {
    return(
        <section className="container__home" id="home">
            <h1>Beautiful designs for wonderful People</h1>
            <p className="text-grey">Getting the website of your dream has never been easier! 🙌</p>
            <a href="#contact" className="text-grey btn-neumorphism"><span>Contact me </span><img src="/assets/icon-arrow.png" alt="icon-arrow"/> </a>
        </section>
    )
}

export default Home;