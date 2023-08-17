import React, { useState } from "react";

const Incdec = () => {

    const [increment, setIncrement] = useState(0);

    const onEvent = () => {
        setIncrement(increment + 1);
    }

    const onhanEvent = () => {
        if(increment > 0){
            setIncrement(increment - 1)
        }else{
            setIncrement(0)
        }
    } 

    return(

        <div className="main">
        <div className="main-content">
            <h1 className="count-num"> {increment} </h1>

            <button className="incbtn" onClick={onEvent}>Incre</button>
            <button className="incbtn" onClick={onhanEvent}>Decre</button>
            
        </div>
        </div>
    );
}

export default Incdec;