import React from "react";
import { NavLink } from "react-router-dom";

export const LoginView = (props) => {
return (
    <div>
        <form className="col-4 d-block mx-auto my-auto p-5 mt-5"
            onSubmit={ (e) =>  props.loginAttempt(e)}>
            <div className="mb-2">
                <label className="form-label" style={{ fontSize: "12px" }}>Введите e-mail и пароль, чтобы войти в аккаунт</label>
                <input type="email" 
                    className="form-control border-0"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder='E-mail'
                    value={ props.loginField }
                    onChange={ (e) => props.setCredentials({...props.credentials, email: e.target.value }) }
                    required/>
            </div>
            <div className="mb-2">
                <input type="password"
                    className="form-control border-0"
                    style={{backgroundColor: "#f5f5f5"}} 
                    placeholder='Пароль'
                    value={ props.pwdField }
                    minLength={6}
                    onChange={ (e) => props.setCredentials({...props.credentials, password: e.target.value }) }
                    required/>
            </div>
            <div className='row justify-content-around'>
                <button type="submit" 
                        disabled = { props.loading }
                        className="btn btn-dark d-inline mt-2 col-5 " >Вход
                </button>
                <NavLink to="/register" 
                        
                        className="text-dark text-decoration-none btn border border-dark d-inline mt-2 col-5">Регистрация
                </NavLink>
            </div>
                


            <span className="ms-2 align-middle text-danger">{props.error}</span>
        </form>
    </div>
);
}