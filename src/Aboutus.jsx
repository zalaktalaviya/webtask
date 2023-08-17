import React from "react";

const Aboutus = () => {

    const web = "https://img.freepik.com/free-vector/young-businessman-with-professional-equipment-work-cartoon-vector_24797-1921.jpg";

    return(  
        <>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row d-flex align-item-center">
                            <div className="col-md-6 order-2 order-lg-2 align-item-center flex-column">
                                <h2 className="home_til mt-5"> Professional <span>Front-End Devloper</span></h2>
                                <p className="tex_tel">About Me
Hi I am a Front-End developer & I can build your website as you want. I can customize plugin & wordpress theme. And I have two years of experience in figma. Now I am able to design your portfolio.

I have three years of experience with HTML, CSS, JavaScript. And I can Design Your web application.</p>
                                <a href="./Images/Resume.pdf" className="button" download="computer">Download cv</a>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 mt-5 text-center">
                                <img src={web} className="img-fluid animater" width={400}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutus