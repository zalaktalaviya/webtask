import React from "react";
import Cards from "./Crads";
import Data from "./Data";

const Service = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h2 className="contact_title mt-5">Services</h2>
                        <div className="row gy-4">
                            {
                                Data.map((val) => {
                                    return <Cards 
                                        image={val.image}
                                        title={val.title}
                                        name={val.name}
                                        learn={val.learn}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service