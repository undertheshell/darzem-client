import React, { useState } from "react";

export const AddCountryForm = (props) => {
    const [countryName, setCountryName] = useState("");

    return (
        <form onSubmit={ (e) => { e.preventDefault(); props.onAddAttribute(countryName) } } className="d-flex flex-column align-items-center justify-content-between" style={{ height: "20rem" }}>
            <span><b>Добавление страны</b></span>
            <div className="form-group">
                <span>Название страны</span>
                <input type={'text'}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder={'название'}
                    value={countryName}
                    required
                    onChange={ (e) => { setCountryName(e.target.value) } }/>
            </div>

            <button className="align-self-end btn btn-primary mx-auto ">Добавить страну</button>
        </form>
    );
} 