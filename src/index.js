import React from "react";
import ReactDom from "react-dom/client";
import './index.css';
// import { add, sub, mul, div } from "./Calc";
// import worldtour, { youtuber, mynames, myname, names } from './Apps';
// import Sdata from "./Sdata";
// import Card from "./Card";
// import Apps from "./Apps";
// import App from "./App";
// import Calc from "./Calc";
// import Challengehook from "./Challengehook";
// import List from "./List";
// import Input from "./Input";
// import Spread from "./Spread";
// import Incdec from "./Incdec";
// import Todolist from "./Todolist";
// import Bootstrap from "./Bootstrap";
// import Keepnote from "./Keepnote";
// import Com from "./Com";
// import Useeffect from "./Useefffect";
// import Statewise from "./components/stateWiseData/statewise";
// import ComD from "./ComD"
// import RouterDom from "./RouterDom";
import { BrowserRouter } from "react-router-dom"; 
import Apple from "./Apple";
import "./webs.scss";
import "./components/css/style.css";
import Tapa from "./components/Tapa"; 
import Todo from "./Todo";
import Gallery from "./components/Tabmenu/Gallery";
import { Auth0Provider } from '@auth0/auth0-react';
// import Accordion from "./components/accordian/Accordion";
// import Myaccordian from "./components/accordian/Myaccordian";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
   
    <>
    <Auth0Provider
    domain="dev-wg6te5esdmiia8sx.us.auth0.com"
    clientId="RfnLiwsoMvlQ0M7NZ3QCHlSXz62Nbv7O"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
            <Apple />
        </BrowserRouter>
   
  </Auth0Provider>,
 
        

    </>
);

