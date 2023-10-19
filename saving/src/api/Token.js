import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Token=()=>{
    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }else{
            navigate('/')
        }
    },[])
}

export {Token}