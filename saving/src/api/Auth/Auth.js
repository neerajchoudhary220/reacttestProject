import React from "react";
import { axiosInstance } from "../axiosInstance";
const login = () => {
    return axiosInstance.post('login');
}

const logout = () => {
    return axiosInstance.get('user/signout');
}

export { login, logout }