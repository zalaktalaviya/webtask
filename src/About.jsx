import React, { useEffect } from "react";

const About = (props) => {
    useEffect(() => {
        document.addEventListener("click", handleClick);

        return function clean(){
            document.removeEventListener("click", handleClick);
        };


        function handleClick(){
            console.log("hi i am called aboutpage");
        }

    });

    return (
        <>
            <h1 className="">Hello, I am {props.name} page.</h1>   
            <p style={{ textAlign: "center", fontSize: "21px", color: "#83540a", textshadow: "0px 1px 0px rgba(0,0,0,0.5)", fontFamily: "poppins"  }}>This is About Page</p>
        </>
    );
}

export default About