import React, { useEffect, useState } from "react";

const Tapa = () => {

       const [city, setCity] = useState(null); 
       const [search, setSearch] = useState("");    
        
       useEffect(() => {
            const fecthApi = async () => {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=830e6750a282ab904d3112d12b98632e`);
                // console.log(response);
                const resjson = await response.json();
                setCity(resjson.main);
            }

            fecthApi();
       },[search])

    return(
        <>
             <h2 className="weather-til">search for city °cel weather</h2>
            <div className="box">
                <div className="box-whether">
                    <div className="form">
                        <input type="search" className="input-field" value={search} onChange={(event) => {
                            setSearch(event.target.value);
                        }} />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    {!city ? (
                        <p>not found data</p>
                    ) : (
                        <div>
                        <div className="contain">
                        <h2 className="whether-tit">
                            <i className="fa-solid fa-street-view"></i>
                        </h2>
                        <h2 className="weather_title">{search}</h2>
                    </div> 
                    <div>
                        <h2 className="location">{city.temp}°cel</h2>
                    </div>
                    <div className="">
                        <p> Min 30°cel | Max 35°cel  </p>
                    </div>

<div className="wave"></div>
<div className="wave-two"></div>
<div className="wave-three"></div>
</div>
                    )}

                </div>
            </div>
        </>
    );
} 

export default Tapa