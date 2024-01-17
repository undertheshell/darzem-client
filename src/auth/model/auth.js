import { useState, useCallback, useEffect } from "react";
import makeRequest from "../../fetch";
import { dataBaseAddress } from "../../config";
const localStorageAuthItem = 'userData'

export const useAuth = () => {
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true);


    const login = useCallback( async (userCredentials) => {
        setLoading(true);
        setError(null);
        try {
            const { data, status } = await makeRequest(`${dataBaseAddress}/login`, 
                "POST", 
                userCredentials,  
            );
        
            if(status >= 400) { 
                setError(data); 
                setIsAuthenticated(false); 
                setLoading(false);
                return ;
            }

            localStorage.setItem(localStorageAuthItem, JSON.stringify({token: data.token, userId: data.userId, userName: data.userName}));
            setUserId(data.userId);
            setUserName(data.userName);
            setIsAuthenticated(true);
            setLoading(false);
        }
        catch(e){
            setError("Что-то пошло не так");
            setIsAuthenticated(false);
            setLoading(false);
        }
    }, []);

    const register = async (userCredentials, confirmPassword) => {
        setLoading(true);
        setError(false);

        if(userCredentials.password !== confirmPassword) {
            setError("Пароли должны совпадать");
            setLoading(false);
            return;
        }

        try {
            const { data, status } = await makeRequest(`${dataBaseAddress}/register`, 
                "POST", 
                userCredentials,  
            );
        
            if(status >= 400) {
                setError(data);
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            localStorage.setItem(localStorageAuthItem, JSON.stringify({token: data.token, userId: data.userId, userName: data.userName}));
            setUserId(data.userId);
            setUserName(data.userName);
            setIsAuthenticated(true);
            setLoading(false);
        }
        catch(e){
            setError("Что-то пошло не так"); 
            setIsAuthenticated(false);
            setLoading(false);
        }
    }

    const logout = useCallback(() => {
        setUserId(null);
        localStorage.removeItem(localStorageAuthItem);
        setIsAuthenticated(false);

    },[]);

    useEffect(() => {
        setLoading(true);
        const data = JSON.parse(localStorage.getItem(localStorageAuthItem));

        if (!data || !data.token || ! data.userId || !data.userName){
            setIsAuthenticated(false);
            setLoading(false);
            return;
        }
        
        setUserId(data.userId);
        setUserName(data.userName);
        setIsAuthenticated(true);
        setLoading(false);
    }, []);

    return { login, register, logout, isAuthenticated, userId, userName, error, loading };
} 