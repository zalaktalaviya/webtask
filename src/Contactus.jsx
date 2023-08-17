import React, { useState, useUpload } from 'react';

const Contactus = () =>{


    const [user, setUser] = useState({
        name: "",
        email: "",  
        phone: "",
        city: "",
        message: "",
    });
    
    let name, value
    
    const changeevent = (event) =>{
        name = event.target.name;
        value =event.target.value;

        setUser({...user, [name]: value});
    };

    const onsubmit = async() =>{

        const {name, email, phone, city, message} = user

        if(name && email && phone && city && message){
            const res = await fetch("https://reactapp-a6821-default-rtdb.firebaseio.com/youtubedb.json",

            {
                method: "POST",
                headers: {
                    "content-type": "application/type",
                },
                body: JSON.stringify({
                    name,
                    email, 
                    phone,
                    city,
                    message,
                })
                
            }
            );
    
            if(res){
                setUser({
                    name: "",
                    email: "",  
                    phone: "",
                    city: "",
                    message: "",
                });
                alert("data store successfully")
            }
        }else{
            alert("please all data fill")
        }

    
    };

    return(
        <>
         <h5 className='wrap-ti'>Contact Us</h5>
            <div className='container'>
                <div className='wrap_main'>
                    <div className='form-wrap'>
                        <form method='POST' className='left-to-wrap'>
                        <div className='wrap-1'>
                            <label>Full Name</label>
                            <input type='text' name='name' placeholder='Enter your name' value={user.name} onChange={changeevent} className='from-wrap100' required autoComplete='off' />
                        </div>
                        <div className='wrap-1'>
                            <label>Email</label>
                            <input type='text' name='email' placeholder='Enter your email' value={user.email} onChange={changeevent} className='from-wrap100' required autoComplete='off' />
                        </div>
                        <div className='wrap-1'>
                            <label>Phone no</label>
                            <input type='text' name='phone' placeholder='Enter your Phone' value={user.phone} onChange={changeevent} className='from-wrap100' required autoComplete='off' />
                        </div>
                        <div className='wrap-1'>
                            <label>city</label>
                            <input type='text' name='city' placeholder='Enter your city' value={user.city} onChange={changeevent} className='from-wrap100' required autoComplete='off' />
                        </div>
                        <div className='wrap-1'>
                            <label>Message</label>
                            <textarea type='text' name='message' cols={72} rows={1} placeholder='Meassage...' value={user.message} onChange={changeevent} className='message'></textarea>
                        </div>

                        <div className='from-button'>
                            <button className='wrap-btn' onClick={onsubmit}>submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus