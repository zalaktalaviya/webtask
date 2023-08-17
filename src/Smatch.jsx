import React from "react";

const Slotmachine = (props) =>{

    let x = props.x;
    let y = props.y;
    let z = props.z;
    
    if( (x === y && y === z )){
        return(
        <>
            <div>
                <h1 className="slot-title">{x} {y} {z}</h1>
                <h3>This image is Matching</h3>
            </div>
        </>
        );
    }else{
        return(
            <>
                <div>
                    <h1 className="slot-title">{x} {y} {z}</h1>
                    <h3>This image is not Matching</h3>
                </div>
            </>
            );
    }
}    

export default Slotmachine;