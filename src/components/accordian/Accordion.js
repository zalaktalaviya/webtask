import React, { useState } from "react";
import Data from "./api";
import "./accordian.css";
import Myaccordian from "./Myaccordian";

const Accordion = () => {
    const [dataname, setDataname] = useState(Data);
    return(
       <>
        <section className="main-name">
            <h2>React js Interview question+</h2>
            {
                dataname.map((currElem) => {
                    const { id } = currElem;
                    return (
                        <Myaccordian key={id} {...currElem} />
                    );
                })
            }
        </section>
       </>
    );
}

export default Accordion