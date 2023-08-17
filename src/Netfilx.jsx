import React from "react"; 
import Sdata from "./Sdata";
import Card from "./Card";

const Netflix = () => {
    return(
        <Card
            key={Sdata[0].key}
            imgsrc={Sdata[0].imgsrc}
            title={Sdata[0].title}
            sname={Sdata[0].sname}
            link={Sdata[0].link}
        /> 
    );
}

export default Netflix;