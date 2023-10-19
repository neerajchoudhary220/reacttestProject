import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";
import { Token } from "../api/Token";
const Login = () => {
    Token();

    const [email, setemail] = useState();
    const [pass, setPass] = useState();
    const [errormsg, Seterror] = useState('');
    const [successMsg, Setsuccessmsg] = useState('')
    const [loader, SetLoader] = useState('d-none');
    const navigate = useNavigate()

    const emailInput = (e) => {
        setemail(e.target.value)
    }
    const passInput = (e) => {
        setPass(e.target.value)
    }

    useEffect(() => {
        Seterror();
        Setsuccessmsg();

    }, [])
    function handleSubmit(e) {
        e.preventDefault();
        SetLoader('');
        axiosInstance.post('login', { email: email, password: pass }).then((res) => {
            localStorage.setItem('token', res.data.data.token)
            navigate('/')
            SetLoader('d-none')

        }).catch((err) => {
            SetLoader('d-none')
        });

    }
    return (<>
        <div className="container">
            <div className="text-right">
                <b className="text-success">{successMsg}</b>
            </div>



            <form onSubmit={handleSubmit}>

                <div className="w-50 m-auto">
                    <div className={"custom-loader "+loader}></div>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={emailInput}>
                    </input>
                    <label className="form-label">Password</label>
                    <input type='password' className="form-control" name="password" onChange={passInput}>
                    </input>
                    <div className="d-flex d-row mt-3">
                        <button className="btn btn-info form-control" type="submit">Submit</button>
                    </div>
                </div>
            </form>
            <div className="mt-3 text-center">
                <center>
                    <b className="text-danger">{errormsg}</b>
                </center>
            </div>


        </div>
    </>)
}
export default Login