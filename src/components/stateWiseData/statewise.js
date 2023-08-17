import React, { useEffect, useState } from "react";

const Statewise = () => {

    const [data, setData] =useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.Statewise); 
        setData(actualData.Statewise)
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return(
        <>
            <div className="container-fluid mt-1">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span>Covid19 Dashboard</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>udpdate</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((currElem, ind) => {
                                    return (
                                        <tr>
                                        <th>{currElem.state}</th>
                                        <td>Confirmed</td>
                                        <td>recovered</td>
                                        <td>deaths</td>
                                        <td>active</td>
                                        <td>udpdate</td>
                                    </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Statewise