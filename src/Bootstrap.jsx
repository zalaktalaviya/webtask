import React from "react";

const Bootstrap = () => {

    const link = "https://www.collinsdictionary.com/dictionary/english/project";

    return(
            <>
                <section>
                    <div className="container">

                        <h1 className="Main_title">Welcome To Bootstrap Card </h1>

                        <div className="row">
                            <div className="card-name">
                                <img src="https://www.digitaldeployment.com/sites/main/files/main-images/camera_lense_0.jpeg" alt="my image" className="my-image"/>
                                
                                <div className="card-body">
                                    <h3 class="card-title">Primary card title</h3>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href={link} target="_blank">
                                        <button className="btn">Click Me</button>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="card-name">
                                    <img src="https://www.digitaldeployment.com/sites/main/files/main-images/camera_lense_0.jpeg" alt="my image" className="my-image"/>
                               
                                <div className="card-body">
                                    <h3 class="card-title">Primary card title</h3>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href={link} target="_blank">
                                        <button className="btn">Click Me</button>
                                    </a>
                                </div>
                            </div>

                            <div className="card-name">
                                    <img src="https://www.digitaldeployment.com/sites/main/files/main-images/camera_lense_0.jpeg" alt="my image" className="my-image"/>
                                
                                <div className="card-body">
                                    <h3 class="card-title">Primary card title</h3>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href={link} target="_blank">
                                        <button className="btn">Click Me</button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        );
}

export default Bootstrap