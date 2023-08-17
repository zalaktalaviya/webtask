import React, { useState } from "react";

const Creatornote = (props) =>{

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {

        const { name, value } = event.target;

        setNote((prevData) => {
           return {
            ...prevData, 
            [name]: value, 
           };
        });

        console.log(note);

    };

    const addEvent = () =>{
        props.keepNote(note);
        setNote({
            title: "",
            content: "",
        });
     }

    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" className="input_name" placeholder="Title" name="title" value={note.title} onChange={InputEvent}  autoComplete="off"/>
                    <textarea rows="4" cols="5" name="content" value={note.content} onChange={InputEvent}  placeholder="Write a Note..."></textarea>   

                    <button className="plus_btn" onClick={addEvent}>
                        +
                    </button>         
                </form>
            </div>
        </>
    );
}

export default Creatornote