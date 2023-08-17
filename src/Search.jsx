import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
    const [image, setImage] = useState("");
    const inputevent = (event) => {
        const manage = event.target.value;
        console.log(manage);
        setImage(manage);
    }

    return(
        <div style={{ textAlign: "center", margin: "15px auto" }}>
            <input type="text" placeholder="anything..." value={image} onChange={inputevent} style={{ outline: "none" }} />

            { image === "" ? null: <Sresult name={image} /> } 
        </div>

    );
}

export default Search

