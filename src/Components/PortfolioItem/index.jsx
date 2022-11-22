import React from "react";
import "./PortfolioItem.scss"

const PortfolioItem = ({title, description, picture, link}) => {
    console.log(title);
    return(
        <article className="">
            <img src={`/assets/portfolio/${picture}`} alt={title} />
            <div className="">
                <span>{title}</span>
                <h2>My latest projects</h2>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-grey btn-neumorphism "><span>The Website </span><img src="/assets/icon-arrow.png" alt="Icon Arrow" /></a>
            </div>
            

        </article>
    )
}

export default PortfolioItem;