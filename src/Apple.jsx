import React from "react";
import Home from "./Home";
import Service from "./Service";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import { Routes, Route } from "react-router-dom";
import Menubar from "./Menubar"
import Footers from "./Footers";

const Apple = () => {
    return(
        <>
            <Menubar />
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/service" Component={Service}></Route>
                <Route path="/about" Component={Aboutus}></Route>
                <Route path="/contact" Component={Contactus}></Route>
            </Routes>
            <Footers />
        </>
    );
}

export default Apple