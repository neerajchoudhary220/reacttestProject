import { axiosInstance } from "./axiosInstance";

const user=()=>{
    return axiosInstance.get('user/profile');
}

export {user}