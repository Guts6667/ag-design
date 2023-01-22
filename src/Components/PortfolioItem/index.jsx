import React from "react";
import "./PortfolioItem.scss"

/**
 * PortfolioItem
 * @param {String} param0 
 * @returns {JSX} React Component
 */
const PortfolioItem = ({title, description, picture, link, position}) => {
    return(
        <article className={`portfolioItem ${position === 'left'? 'left' : 'right'}`}>
             <div className="portfolioItem__description">
                <span className="portfolioItem__description-title">{title}</span>
                <h2>My latest projects</h2>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-grey btn-neumorphism "><span>The Website </span><img src="/assets/icon-arrow.png" alt="Icon Arrow" /></a>
            </div>
            <img src={`/assets/portfolio/${picture}`} alt={title} />
        </article>
    )
}

export default PortfolioItem;