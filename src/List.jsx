import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// button click for background color change and button click for button name change  and
// bdclick event use for hooks project

const List = () =>{

    const purple = "8e44ead";
    const [bg, setBg] = useState(purple);
    const [names, setNames] = useState("click me");

    const bgChange = () => {
        // console.log("clicked me");  
        let newBg = "#34495e";
        setBg(newBg);   
        setNames("welcom To 😊");
    }

    const bgcolor = () =>{
        let newcolor = "#000";
        setBg(newcolor);
        setNames("welcome To Jalak 💃");
    }

    const link = "https://www.youtube.com/watch?v=NvmkaX5PTDE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=73"

    return(
        <>
            <div style={ { backgroundColor: bg } }>
                <button className="click" onClick={bgChange} onDoubleClick={bgcolor}>{names}</button>
            </div>

            <h3 className="text-center text-success">jalak talaviya</h3>

            <a href={link} target="_blank" className="btn btn-outline-danger">click me</a>
            
        </>
    );
}
    
export default List;