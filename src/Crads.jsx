import React from "react";

const Cards = (props) => {

        const Link = "https://www.instagram.com/";

    return(
        <>
     
        <div className="col-md-4 mt-5">
            <div className="card-main">
                <div className="card-main-body">
                    <i>{props.image}</i>
                    <h4 className="card-tile">{props.title}</h4>
                    <p className="card-txt">{props.name}</p>
                    <button className="btn-lern">{props.learn}</button>
                </div>
            </div>
        </div>

        </>
    );
}

export default Cards