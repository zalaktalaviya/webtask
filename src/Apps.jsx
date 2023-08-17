import React, { useState } from "react";

// button click for count number hooks in react js hooks 

const Apps = () => {
    const incNum = () => {
        setCount(count + 1);
    }

    // simple hooks create
    const [count, setCount] = useState(0);

    const state = useState();
    console.log(state);

    return <>
        <div> 
        <h1> {count} </h1>
        <button onClick={incNum}>click me</button>
        </div>
    </>
}

export default Apps;