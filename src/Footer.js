import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="footer-distributed footer zigzag ">

        <div className="footer-left">

            <h3>Bot<span> Ptr</span></h3>

            <p className="footer-links">
                <NavLink to="/" className="link-1">Home</NavLink>
                
                <NavLink to="#">Blog</NavLink>
                        
                <NavLink to="/About">About</NavLink>
                
                <NavLink to="#">Faq</NavLink>
                
                <NavLink to="/Contact">Contact</NavLink>
            </p>

            <p className="footer-company-name">Bot Ptr © 2020</p>
        </div>

        <div className="footer-center">

            <div>
                <i className="fa fa-map"></i>
                <p><span>372.S Dhauli</span> Odiaha, India</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>9337348536</p>
            </div>

            <div>
                <i className="fa fa-envelope"></i>
                <p><NavLink to="mailto:support@company.com">support@bot.ptr.com</NavLink></p>
            </div>
        </div>

        <div className="footer-right">

            <p className="footer-company-about">
                <span>About this site</span>
                I remember being curious as a child,
                but I want to make sure that nothing is behind his fascination and his brother doesn't get physically hurt.
                I don't even know ...
            </p>

            <div className="footer-icons">

                <NavLink to="#"><i className="fa fa-facebook"></i></NavLink>
                <NavLink to="#"><i className="fa fa-twitter"></i></NavLink>
                <NavLink to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></NavLink>
                <NavLink to="#"><i className="fa fa-github"></i></NavLink>

            </div>

        </div>
         </footer>   
        </>
    )
}

export default Footer;