import React, { useEffect, useState } from "react";

const Useeffect = () => {

    const [num, setNum] = useState(0);  
    
    useEffect(() => {
        document.title=`you have clicked ${num} count`
    }); 

    return(
        <>
            <button onClick={() => {
                setNum(num+1);
            }}
            >
                Click me {num}
            </button>
        </>
    );
}

export default Useeffect