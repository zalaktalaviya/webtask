import React from "react";

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return(
        <>
            <div className="notes">
                <h1 className="note_title">{props.title}</h1>
                <p className="note_text">{props.content}</p>

                <button className="note_btn" onClick={deleteNote}><i class="fa-solid fa-trash"></i></button>
            </div>
        </>
    );  
}

export default Note