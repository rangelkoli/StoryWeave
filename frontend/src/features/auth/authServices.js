import axios from "axios";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const BACKEND_DOMAIN = "http://localhost:8000";

const REGISTER_URL = `${BACKEND_DOMAIN}/register/`;
const LOGIN_URL = `${BACKEND_DOMAIN}/token/`;

const register = async (data) => {
    try {
        const response = await axios.post(REGISTER_URL, data, {
        headers: {
            "Content-Type": "application/json",
        },
        });
        return response.data;
    } catch (error) {
        return error;
    }
    }

const login = async (data) => {
    try {
        const response = await axios.post(LOGIN_URL, data, {
        headers: {
            "Content-Type": "application/json",
        },
        });
        console.log(response.data);

        const tokenAuth = JSON.stringify(response.data.access);
        const tokenMain = tokenAuth.replace(/['"]+/g, '');
        localStorage.setItem("authTokens", tokenMain);
        // const token = response.data.access;

        // return { token, username: decodedToken.username, email: decodedToken.email };
        return response.data;

    } catch (error) {
        return error;
    }
    
}
const authServices = {
    register,
    login,
};

export default authServices;