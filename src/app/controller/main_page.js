import React from "react"
import Logo from "../../main.jpg";
import { useLocation } from "react-router-dom";

export const MainPage = () => {    

    const location = useLocation();

    return ( 
        <div className="d-block align-items-center justify-content-center text-center">
            <h1 className="display-1 mt-5">Картотека книг</h1>
            <h3>Главная страница</h3>
            <img src={Logo} alt="Иконка домашней библиотеки" style={{width: "30rem"}}/>
            <h3 className="text-danger font-weight-bold">{location.state?.data ?? ""}</h3>
        </div>
     );
}