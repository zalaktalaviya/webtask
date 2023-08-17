import React, { useState } from "react";

const Myaccordian = (question, answer) => {

    const [show, setShow] = useState(false);

    return(
        <>
        <div className="main-content">
            <p onClick={() =>setShow(!show)}>{show? "-": "+"}</p>
            <h3>{question}</h3>
        </div>
        {show && <p className="name">{answer}</p>}
        </>
    );
}
    
export default Myaccordian