
import React, { createContext, useState, useEffect } from 'react';

export default AuthProvider = ({ children }) => {


    let [authTokens, setAuthTokens] = useState(
        localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null
    );
    let [user, setUser] = useState();

    
    useEffect(() => {
        if (authTokens) {
            const user = JSON.parse(authTokens);
            setUser(user);
        }
    }, [authTokens]);

    let loginUser = async (data) => {
        try {
            const response = await authServices.login(data);
            setAuthTokens(response);
            return response;
        } catch (error) {
            return error;
        }
    }


}
