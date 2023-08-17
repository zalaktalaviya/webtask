import React, { useEffect, useState } from "react";
import axios from 'axios';

const ComD = () => {

    const [number, setNumber] = useState();
    const [num, setNum] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/1${number}`);
            console.log(res.data.name);
            setNum(res.data.num);
            setMoves(res.data.moves);
        }
        getData();
    }, [num])

    return(
        <>
            <h2> I have Choose <span style={{ color: 'red' }}>{number} value</span> </h2>

            <h2> I have a selected <span style={{ color: 'red' }}>{num}</span></h2>

            <h2>I have <span style={{ color: 'red' }}> {moves} move </span> </h2>

            <select value={number}
             onChange={(event) => {
                setNumber(event.target.value);
            }}>
                <option>1</option>
                <option>25</option>
                <option>3</option>
                <option>4</option>
                <option>65</option>
            </select>
        </>
    );  
}

export default ComD