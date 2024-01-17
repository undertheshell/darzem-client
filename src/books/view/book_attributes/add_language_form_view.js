import React, { useState } from "react";

export const AddLanguageForm = (props) => {
    const [languageName, setLanguageName] = useState("");

    return (
        <form onSubmit={ (e) => { e.preventDefault(); props.onAddAttribute(languageName) } } className="d-flex flex-column align-items-center justify-content-between" style={{ height: "20rem" }}>
            <span><b>Добавление языка</b></span>
            <div className="form-group">
                <span>Название языка</span>
                <input type={'text'}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder={'язык'}
                    value={languageName}
                    required
                    onChange={ (e) => { setLanguageName(e.target.value) } }/>
            </div>

            <button className="align-self-end btn btn-primary mx-auto ">Добавить язык</button>
        </form>
    );
} 