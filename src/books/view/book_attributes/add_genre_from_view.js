import React, { useState } from "react";

export const AddGenreForm = (props) => {
    const [genreName, setGenreName] = useState("");

    return (
        <form onSubmit={ (e) => { e.preventDefault(); props.onAddAttribute(genreName) } } className="d-flex flex-column align-items-center justify-content-between" style={{ height: "20rem" }}>
            <span><b>Добавление жанра</b></span>
            <div className="form-group">
                <span>Название жанра</span>
                <input type={'text'}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder={'жанр'}
                    value={genreName}
                    required
                    onChange={ (e) => { setGenreName(e.target.value) } }/>
            </div>

            <button className="align-self-end btn btn-primary mx-auto ">Добавить автора</button>
        </form>
    );
} 