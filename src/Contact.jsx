import React, { useEffect } from "react";

const Contact = (props) => {
   useEffect(() => {
    document.addEventListener("click", handleClick);

    return function clean(){
        document.removeEventListener("click", handleClick);
    };


    function handleClick(){
        console.log("hi i am called Contact page");
    }
   });

    return (
        <>
            <h1>Hello, I am {props.name} page.</h1>  
            <p style={{ textAlign: "center", fontSize: "21px", color: "#83540a", textshadow: "0px 1px 0px rgba(0,0,0,0.5)", fontFamily: "poppins" }}>This is Contact Page</p>
        </> 
    );
}

export default Contact