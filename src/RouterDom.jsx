import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Search from "./Search";

const RouterDom = () => {
    return(
        <>
            <Navbar />
            <Routes>
                <Route path="/" Component={() =>  <About name="About" /> }></Route>
                <Route path="/contact" Component={() => <Contact name="contact" /> }></Route>x``
                <Route path="/Search" Component={Search}></Route>
                <Route path="/Blog/:fname/:lname/" Component={() => <Blog name="Blog" /> } /> 
            </Routes>

            {/* <About />
            <Contact /> */}
        </>
    );
}

export default RouterDom  