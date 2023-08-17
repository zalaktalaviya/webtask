import React, { useState } from "react";
import JK from "./Jk";
import Footer from "./Footer";
import Creatornote from "./Creatornote";
import Note from "./Note";

const Keepnote = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) =>{
       setAddItem((prevData) =>{
            return [...prevData, note];
       });
    }

    const onDelete = (id) => {
        setAddItem((olddata) => {
            olddata.filter((currdata, indx) => {
                return indx != id;
            });
        });
     }

    return(
        <>
            <JK />
            <Creatornote keepNote={addNote} />

                {addItem.map((val, index) => {
                        return  <Note
                                key={index}
                                id={index}
                                title={val.title}
                                content={val.content}
                                deleteItem={onDelete}
                            />
                })
            }
                
            
            <Footer />
        </>
    );
}

export default Keepnote