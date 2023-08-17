import React, { useState } from "react";


// input for show data hooks creat
const Input = () => {

    const [Fullname, setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phoneno:"",
        country:"",
    });


    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const { value, name } = event.target;

        setFullName((preValue) => {
           console.log(preValue)
            return {
                ...preValue,
                [name] : value,
            }
          
            // if(name === "fname") {
            //     return{
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phoneno: preValue.phoneno,
            //     }
            // }else if(name === "lname"){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phoneno: preValue.phoneno,
            //     }
            // }else if(name === "email"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phoneno: preValue.phoneno,
            //     }
            // }else if(name === "phoneno"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phoneno: value,
            //     }
            // }
            
        });
        
    }

    const onsubmit = (event) =>{
        event.preventDefault();
        alert("form submitted");
    }

    return (
        <>
            <div>
                <form>
                    <h3 className="input-title">Firstname : {Fullname.fname}</h3>
                    <h3 className="input-title">Lastname : {Fullname.lname}</h3>
                    <h3 className="input-title">Email : {Fullname.email}</h3>
                    <h3 className="input-title">Phone No : {Fullname.phoneno}</h3>
                    <h3 className="input-title">Country : {Fullname.country}</h3>
                    <input type="text" placeholder="Enter Your firstname" name="fname" onChange={inputEvent} au/>
                    <input type="text" placeholder="Enter Your lastname" name="lname" onChange={inputEvent} autoComplete="off"  />
                    <input type="email" placeholder="Enter Your email" name="email" onChange={inputEvent} autoComplete="off"   />
                    <input type="number" placeholder="Enter Your MobileNo" name="phoneno" onChange={inputEvent}   />
                    <input type="text" placeholder="Enter Your Country" name="country" onChange={inputEvent} autoComplete="off"  />
                    <button className="click" onClick={onsubmit}>Submit 😻 </button>
                </form>
            </div>
        </>
    );  

}

export default Input;