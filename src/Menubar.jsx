import React, { useState } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Menubar = () => {

    const [menubar, setMenubar] = useState(false);
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user } = useAuth0();
    const { isAuthenticated } = useAuth0();

    return(
        <>
         
         <div className="main_divr">
                <div className="logo">
                    <NavLink className="logo-name" to="/">TalaviyaTech</NavLink>
                </div>

                {/* second section in menu */}
                <div className={
                    menubar ? "menu-link" : "mobile-menu-link"
                    }>
                    <ul>
                        <li>
                            <NavLink href="#" className="link-name" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="#" className="link-name" to="about">About</NavLink>
                        </li>
                        <li>
                            <NavLink href="#" className="link-name" to="service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink href="#" className="link-name" to="contact">Contact</NavLink>
                        </li>
                        {/* <li>
                            { isAuthenticated &&  <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt={user.name} /> }
                        </li> */}

                    </ul>
                </div>
                <i className="fa-solid fa-bars" onClick={() => setMenubar(!menubar)}></i>

                {/* third in icon */}

                <div className="icon-bar">
                    <ul className="social-media">
                        {/* <li>
                            <a className="icon-name" target="_blank" href="https://www.facebook.com/watch/?ref=tab"><FaFacebookSquare /></a>
                        </li>
                        <li>
                            <a className="icon-name" target="_blank" href="https://www.instagram.com/"><FaInstagramSquare /></a>
                        </li>
                        <li>
                            <a className="icon-name"  target="_blank" href="https://twitter.com/home"><FaTwitterSquare /></a>
                        </li>
                        <li>
                            <a className="icon-name"  target="_blank" href="https://www.linkedin.com/feed/"><AiFillLinkedin /></a>
                        </li> */}
                        {
                            isAuthenticated ? (
                                <li>
                        <button className="button-click" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                        </li>
                            ) : (
                                <li>
                                <button className="button-click " onClick={() => loginWithRedirect()}>Log In</button>
                            </li>
                      
                            )
                        }
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Menubar