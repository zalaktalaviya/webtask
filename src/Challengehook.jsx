import React, { useState } from "react";

// button click in change time and digilocker mini project create

const Challengehook = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setctime] = useState(time);

    const Update = () => {
        let newCtime = new Date().toLocaleTimeString();
        setctime(newCtime);
    }

    setInterval(Update,1000);

    return(
        <div className="digit">
            <h1> {time} </h1>
        </div>
    );
}

export default Challengehook;