import React from "react";
import ReactDOM from "react-dom";
import Sdata from "./Sdata";
import Card from "./Card";


// function on create for map() how create website demo 

function jalak(val) {
    return( 
        <Card 
            imgsrc={val.imgsrc}
            title={val.title}    
            sname={val.sname}
            link={val.link} 
        /> 
    );
}

const App = () => {
    const movie = "Top 6 Netflix Movie Series"
    return(
ReactDOM.render(
    <>
        <h1 className="title"> {movie} </h1>

        {Sdata.map((val, index) => {
            console.log(index);
            return( 
                <Card
                    key={val.key}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                /> 
            );
        })} 
           
    </>,
    document.getElementById('root')
)
    );  
}

export default App;