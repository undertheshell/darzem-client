import React from "react";
import { NavLink } from "react-router-dom";

export const RegisterView = (props) => {
return (
    <form className="col-5 d-block mx-auto p-5 fs-6" onSubmit={ (e) => props.registryAttempt(e)}>
        <div className="mb-2">
        <label className="form-label" style={{ fontSize: "12px" }}>Если вы уже зарегистрированы, то войдите через обычную форму или зарегестрируйтесь ниже.</label>
            <input type="text" 
                    className="form-control border-0"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder="Ваше имя"
                    value={ props.credentials.firstName }
                    onChange={ (e) => props.setCredentials({...props.credentials, firstName: e.target.value }) }
                    required/>
        </div>
        <div className="mb-2">
            <input type="text"
                    className="form-control border-0"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder="Ваша фамилия"
                    value={ props.credentials.lastName }
                    onChange={ (e) => props.setCredentials({...props.credentials, lastName: e.target.value }) }
                    required/>
        </div>
        
        <div className="mb-2">
            <input type="email"
                    className="form-control border-0"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder="Ваш e-mail (будет использоваться как логин)" 
                    value={ props.credentials.email }
                    onChange={ (e) => props.setCredentials({...props.credentials, email: e.target.value }) }
                    required/>
        </div>
        <div className="mb-2">
            <input type="password"
                    className="form-control border-0"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder="Пароль" 
                    value={ props.credentials.password }
                    onChange={ (e) => props.setCredentials({...props.credentials, password: e.target.value }) }
                    minLength={6}
                    required/>
        </div>
        <div className="mb-2">
            <input type="password"
                    className="form-control border-0"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder="Повторите пароль" 
                    value={ props.credentials.confirmPassword }
                    onChange={ (e) => props.setCredentials({...props.credentials, confirmPassword: e.target.value }) }
                    minLength={6}
                    required/>
        </div>
        <div className='row justify-content-around'>
            <NavLink to="/login" 
                    className="text-dark text-decoration-none btn border border-dark d-inline mt-2 col-5">Вход
            </NavLink>
            <button type="submit" 
                    className="btn btn-dark text-center d-inline fs-6 mt-2 col-5">
                        Зарегестрироваться
            </button>
        </div>

        <span className="ms-2 align-middle text-danger">{props.error}</span>
    </form>
);
}