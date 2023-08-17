import React from "react";
import Slotmachine from "./Smatch";

// slot machine programme and mini project create use for if Else condition

const Calc = () => {
    return(
        <>
            <h1 className="title"> 🎰 
                <span style={{fontWeight:"bold" }}>my Slot machine</span>
                 🎰 
            </h1>

            <div className="slot"> 
                <Slotmachine  x='😃'  y='😃'  z='😃' />
                <hr />
                <Slotmachine x='🍌' y='🥪' z='📡' />
                <hr />
                <Slotmachine x='😃'  y='😃'  z='😅' />
                <hr />
                <Slotmachine x='😎'   y='😎'  z='😎' />
            </div>
        </>
    );
}

export default Calc