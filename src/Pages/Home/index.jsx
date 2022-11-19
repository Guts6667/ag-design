import React from "react";
import "./Home.scss"


const Home = () => {
    return(
        <section className="container__home">
            <h1>Beautiful designs for wonderful People</h1>
            <p className="text-grey">Getting the website of your dream has never been easier! 🙌</p>
            <a href="#contact" className="text-grey btn-neumorphism">Contact me <img src="/assets/icon-arrow.png" alt="icon-arrow"/> </a>
        </section>
    )
}

export default Home;