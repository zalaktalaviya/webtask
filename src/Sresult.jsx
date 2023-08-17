import React from "react";

const Sresult = (props) => {

    const img = `https://source.unsplash.com/200x200/?${props.name}`;

    return( 
        <>
            <img src={img} alt="my" width="330" height="300" style={{ display: "block", textAlign: "center", margin: "10px auto" }} />
        </>
    );
}

export default Sresult