import React from "react";
import "./Footer.scss"
/**
 * Footer
 * @returns {JSX} React Component
 */
const Footer = () => {
    return(
        <footer>
            <a href="mailto:alexianegrieu@gmail.com">alexianegrieu@gmail.com</a>
            <div className="footer__social">
                <span>Find me:</span>
                <a href="https://www.linkedin.com/in/alexiane-grieu-864084152/" target="_blank" rel="noopener noreferrer"><img src="/assets/Linkedin-Circled.png" alt="Icon Linkedin" /></a>
                <a href="https://www.behance.net/alexianegr?tracking_source=search_projects%7Cdaily+project" target="_blank" rel="noopener noreferrer"><img src="/assets/Behance.png" alt="Icon Behance" /></a>
            </div>
        </footer>
    )
}
export default Footer;