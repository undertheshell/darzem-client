import React, { useContext } from "react";
import { AppContext } from "../model/context";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const { links, logout, isAuthenticated, userName } = useContext(AppContext);
    const navigate = useNavigate();

    if (!isAuthenticated) return (
        <div className='bg-primary row w-100 h-100 p-0 m-0 justify-content-around'>
            <h4>Моя библиотека</h4>
        </div>
    );

    return (
        <div className='bg-primary row w-100 h-100 p-0 m-0'>
            <div className='col-10 d-flex flex-row justify-content-evenly align-items-center'>
                { links.map(link => { return (<Link key={link.path} to={link.path} className="text-decoration-none nav-link text-dark font-weight-bold">{link.text}</Link>) }) }
            </div>
            <div className='col-1 d-flex flex-row align-items-center'>
                <span>{userName}</span>
            </div>
            <div className='col-1 d-flex flex-row align-items-center'>
                <button className='btn btn-light h-75'onClick={ () => { logout(); navigate("/login"); } }>
                    Выйти
                </button>
            </div>
        </div>
    );
}