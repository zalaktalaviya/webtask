import React from "react";

// Spread opretor/
const Spread = () => {

    const name = ["jalak", "talaviya"];

    const data = {id:1, ...name, Age:20, car:"KIA"}

    console.log(data);


    // const highcar = ['Mercidis', 'Kia', 'Lamborgini', 'Harrier', 'I20', 'Ertiga', 'Thar'];

    var supergames = ['GTA 5', 'GTA Sanaddress', 'Call of Duty', 'Free fire', 'Battel Ground Mobile', 'Cash of Clans'];
    var [first,...remaining] = supergames; // spread opretor

    console.log(first);
    console.log(remaining);

}

export default Spread;