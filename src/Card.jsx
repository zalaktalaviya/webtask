import React from "react";

// Netflix Fouvrite Movie Series mini project

function Card(props) {
    return(
        <div className="cards">
        <div className="card">
        <img src={props.imgsrc} alt="mypick" className="card_img" />
            <div className="card_info">
                <span className="card_category">{props.title}</span>
                <h3 className="card_title">{props.sname}</h3>
                <a href={props.link} target="_blank">
                    <button className="watch">watch Now</button>
                </a>
            </div>
        </div>    
    </div>  
    );
}

export default Card;