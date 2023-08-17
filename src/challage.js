import React from "react";
import ReactDOM from "react-dom";
import { add } from "./Calc";

ReactDOM.render(
    <>
        <ul>
            <li>{add(10, 85)}</li>
        </ul>
    </>,
    document.getElementById('root')
);