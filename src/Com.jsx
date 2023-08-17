import React, { createContext } from "react";
import ComA from "./ComA";

const firstname = createContext();
const Age = createContext();


const Com = () => {
    return(
        <>
            <firstname.Provider value={'talaviya jalak'}>
                <Age.Provider value={'25'}>  
                    <ComA />    
                </Age.Provider>
            </firstname.Provider>
        </>
    );
};

export default Com;
export { firstname, Age }