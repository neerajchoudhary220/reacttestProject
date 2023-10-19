import React, { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import axios from "axios";

const Parks = () => {
    const url = "http://127.0.0.1:8000/api/parks";
    const baseUrl = "http://127.0.0.1:8000";
    const [Parks, setParks] = useState([])
    const GetParks = () => {

        axios.get(url).then((res) => {
            console.log("success:", res.data.data.parks.data)
            setParks(res.data.data.parks.data)
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        GetParks()
    }, [])

    return (
        <>
            <Header></Header>
            <div>
                <div className="row p-2">
                    <div className="col-12">
                        <div className="row">
                            {Parks.map((obj, index) => {
                                return (
                                    <div className="col-3 mb-4">
                                        <div style={{ position: 'relative' }} >
                                            <div className="image-label">
                                                <label>{obj.name}</label>
                                            </div>
                                            {obj.image ? (

                                                <img src={baseUrl + obj.image.url} alt="park-image" className="div-box-shadow"
                                                    style={{ resizeMode: 'contain', width: '300px', height: '245px', border: '2px solid #367e10' }}></img>

                                            ) : (
                                                <img src="assets/image/placeholder.png" alt="park-image" className="div-box-shadow"
                                                    style={{ resizeMode: 'contain', width: '300px', height: '245px', border: '2px solid #367e10' }}></img>
                                            )}
                                        </div>
                                    </div>


                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Parks