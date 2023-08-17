import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Home = () => {

    return(
        <>  
            <div className="container-fluid nav-bg">
                {/* <div className="row"> */}
                    <div className="col-10 mx-auto">
                        <div className="row  align-item-center">
                            <div className="col-md-6 order-2 order-lg-2 align-item-center flex-column">
                                <h2 className="home_til mt-5">Hello, <span className="wave">👋</span> </h2>
                                <h2 className="home_till">I'm Jalak Talaviya</h2>
                                <h2 className="home_title">React js Devloper</h2>
                                <p className="tex_tel">React.js, often simply referred to as React, is an open-source JavaScript library for building user interfaces (UIs) and user interface components. It was developed and is maintained by Facebook, and it's widely used for creating dynamic and interactive web applications.</p>
                                <div>
                                    <h2 className="find">find with me</h2>
                                    <ul className="iconmedia">
                                        <li>
                                            <a className="icon-name" target="_blank" href="https://www.facebook.com/watch/?ref=tab"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a className="icon-name" target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a className="icon-name"  target="_blank" href="https://twitter.com/home"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a className="icon-name"  target="_blank" href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin-in"></i></a>
                                        </li>
                                    </ul>
                        
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 mt-5 text-center">
                                <img src="images/0D0A0755.JPG" alt="my pic" className="img-tag animater" width={400}/>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}

export default Home