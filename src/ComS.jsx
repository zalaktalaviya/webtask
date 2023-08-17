import React, { useContext } from "react";
import { firstname, Age } from "./Com";

const ComS = () => {

    const fname = useContext(firstname);
    const age = useContext(Age);

    return(
        <h1>my name is {fname} your Age is {age} </h1>
    );
}

export default ComS