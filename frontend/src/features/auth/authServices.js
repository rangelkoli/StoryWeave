import axios from "axios";
import { Link } from "react-router-dom";

const BACKEND_DOMAIN = "http://localhost:8000";

const REGISTER_URL = `${BACKEND_DOMAIN}/register/`;
const LOGIN_URL = `${BACKEND_DOMAIN}/login/`;

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


const authServices = {
    register,
};

export default authServices;