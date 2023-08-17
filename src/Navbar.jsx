import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Images/images-removebg-preview.png";

const Navbar = () => {
    
    return(
        <>
        
        <header className="header_main  ">
            <div className="mobile-nav-btn">
                <i class="fa-solid fa-bars" name="open"></i>
                <i class="fa-solid fa-xmark" name="close"></i>
            </div>
        <img alt="logo" src={logo} width='80' height='70' style={{ }} />
            <ul className="main_menu">
            <NavLink activeClassName="active" to="/">About Us</NavLink>
            <NavLink activeClassName="active" to="/contact">Contact Us</NavLink> 
            <NavLink activeClassName="active" to="/search">Search</NavLink> 
            <NavLink activeClassName="active" to="/Blog/jalak/talaviya">Blog</NavLink>   
            </ul>
        </header>

        </>


    );
}

export default Navbar 