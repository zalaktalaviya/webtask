import React, { useState } from 'react';

const Todo = () => {

    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [togglebutton, setTogglebutton] = useState(false);
    const [edititems, setEditItems] = useState(null);

    const inputevent = (event) => {
        setTodo(event.target.value);
    }
    
    const listevent = () => {
        if(!todo){

        }else{
            const allupdate = { id: new Date().getTime().toString(), name:todo }
            setTodolist([...todolist, allupdate]);
            setTodo("");
        }
    }

  

    const edititem = (id) =>{
        const newedit = todolist.find((elem) =>{
            return elem.id !== id;
        });
        console.log(newedit);

        setTogglebutton(false);

        setTodo(newedit.name);

        setEditItems(id);
    }

    const remove = () => {
        setTodolist([]);
    }    

    return(
        <>
            <div className='Main_todo'>
                <div className='todo-list'>
                <h3 className='mark-todo'>
                    <i className="fa-sharp fa-solid fa-book-bookmark" style={{ color:"yellow" }}></i>
                </h3>

                <div>
                    <input type='text' placeholder='search' name='' value={todo} className='input-todo' onChange={inputevent} />
                    {
                        togglebutton ? <i className="fa-solid fa-plus" onClick={listevent}></i> :
                        <i className="fa-solid fa-pen-to-square" onClick={edititem}></i>
                    }
                    <i className="fa-solid fa-plus" onClick={listevent}></i>
                </div>

                <div className='Add-todo-list'>
                    {
                        todolist.map((Elem) => {
                            return (
                                <div key={Elem.id}>
                                <h2 className='list'>
                                { Elem.name }
                                <div className='iconbar'>
                                    <i className="fa-solid fa-trash-can" ></i>
                                    <i className="fa-solid fa-pen-to-square" onClick={() =>{ edititem(Elem.id)}}></i>
                                </div>
                                </h2>
                            </div>
                            )
                        })
                    }
                </div>

                <button className='remove' onClick={remove}>romove all</button>

                </div>  
            </div>
        </>
    );
}

export default Todo