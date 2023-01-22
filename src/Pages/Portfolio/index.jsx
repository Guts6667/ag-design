import React, { useEffect, useState } from "react";
import PortfolioItem from "../../Components/PortfolioItem";
import "./Portfolio.scss"

/**
 * Section Portfolio
 * @returns {JSX} React Component
 */
const Portfolio = () => {

    const [datas, setDatas ] = useState([])

    useEffect(() => {
        fetch("/data/portfolio.json")
        .then((datas) => datas.json())
        .then((datas) => setDatas(datas)) 
    }, [])
    return(
        <section className="container container__portfolio" id="portfolio">
            {datas && (
                datas.map((data) => {
                    return(
                        <PortfolioItem key={`${data.index}-${data.title}`} title={data.title} description={data.description} picture={data.picture} link={data.link} position={data.position} />
                    )          
                })
            )}
        </section>
    )
}

export default Portfolio;