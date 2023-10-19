import React, { Component, useEffect, useState } from "react";
import PlaceholderImage from "../assets/img/placeholder.png";

const ProgressiveImg = ({ img }) => {
    const [imgSrc, SetImgSrc] = useState(null);
    console.log('imgSrc', imgSrc)

    useEffect(()=>{
       if(img!==undefined){
        SetImgSrc("http://127.0.0.1:8000"+img)
       }
    },[img])
    return (
       
        <img height="100" width="100" alt="user image" className="rounded-circle" src={imgSrc ??PlaceholderImage}></img>
    )
}
export default ProgressiveImg