import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../app/model/context";
import { LoginView } from "../view/login_view";

export const LoginPage = () => {
    
    const { error, login, loading } = useContext(AppContext)
    const [credentials, setCredentials] = useState({email: '', password: ''})
    const navigate = useNavigate();

    const loginAttempt = async (e) => 
    {
        e.preventDefault()
        if (credentials.email.trim() && credentials.password.trim())
        {            
            login({ 
                email: credentials.email, 
                password: credentials.password
            });
            navigate("/main");
        }
    }

    return ( <LoginView loginAttempt = {loginAttempt } credentials = {credentials} setCredentials = {setCredentials} error = {error} loading = {loading}/> );
}