import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../app/model/context";
import { RegisterView } from "../view/register_view";

export const RegisterPage = () => {
    
    const { error, register } = useContext(AppContext)
    const [credentials, setCredentials] = useState({email: '', password: '', confirmPassword: '', firstName: '', lastName: ''})
    const navigate = useNavigate();

    const registryAttempt = async (e) => 
    {
        e.preventDefault()
        if (credentials.firstName.trim() && credentials.lastName.trim() && credentials.email.trim() && credentials.password.trim() && credentials.confirmPassword.trim() )
        {
            
            register({email: credentials.email, password: credentials.password, name: `${credentials.firstName} ${credentials.lastName}`}, credentials.confirmPassword);
            navigate("/main");
        }
    }

    return ( <RegisterView registryAttempt = {registryAttempt} credentials = {credentials} setCredentials = {setCredentials} error = {error} /> );
}