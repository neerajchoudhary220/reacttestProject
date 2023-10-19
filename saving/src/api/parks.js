import { axiosInstance } from "./axiosInstance";

const parks=()=>{
    return axiosInstance.get('parks');
}

export {parks}