import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance"
import { Token } from "../api/Token";
import Header from "../components/layouts/Header";
const Profile = () => {
    Token();
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        axiosInstance.get('user/profile').then((res) => {
            console.log(res)
            setName(res.data.data.name)
            setEmail(res.data.data.email)

        }).catch(err => console.log(err));

    }, [])
    return (<>
    <Header></Header>
        <div class="container">
            <center>
                <b>Welcome {name}</b>
            </center>
        </div>
    </>)
}

export default Profile