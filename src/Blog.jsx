import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


    const Blog = (props) => {


        // const location = useLocation();
        // console.log(location);

        const {fname, lname} = useParams();
        return(
            <>
            <h1>Hi welcome  {fname} {lname} my {props.name} Page</h1>
           
            {/* {location.pathname === `/Blog/jalak/talaviya`  ? (
            <button onClick={() => console.log("i am Blog page") }>Show me</button>    
       ):null } */}
            </>
        );
    }



export default Blog