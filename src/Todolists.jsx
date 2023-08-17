import React from "react";

const Todolists = (props) => {

    return(
        <div className="style">
            <i class="fa-solid fa-xmark icon" 
            onClick={() => {
                props.onSelect(props.id);    
            }}
                ></i>
            <li> {props.text} </li>
        </div>

        
    )
}

export default Todolists;