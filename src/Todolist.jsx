import React, { useState } from "react";
import Todolists from "./Todolists";

const Todolist = () => {

    const [itemlist, setItemlist] = useState("");
    const [ItemsList, setItemsList] = useState([]);

    const ItemEvent = (event) => {
        setItemlist(event.target.value);   
    }

    const ListEvent = () => {
        setItemsList((oldItems) => {
            return [...oldItems, itemlist];
        })
        setItemlist("");
    }

    const deleteItems = (id) => {
        console.log("deleted");

        setItemsList((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    



    return(
        
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="title_name">Todo List</h1>
                    <br />

                    <input type="text" placeholder="Add a item" value={itemlist} className="input" onChange={ItemEvent} />
                    <button className="round_btn" onClick={ListEvent}> + </button>


                    <ol>
                        {ItemsList.map((itemval, index) => {
                                return <Todolists
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                                />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>

    );
}

export default Todolist