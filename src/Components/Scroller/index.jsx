import React from "react";
import "./Scroller.scss"

const Scroller = () => {

    const scrollDown = () => {
        window.scroll(0, 1000);
    }
    return(
        <div className="scroller" onClick={scrollDown}>
            <img src="/assets/chevron-down.png" alt="Chevron Down" />
        </div>
    )
}

export default Scroller;