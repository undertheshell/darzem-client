import React, { useState } from "react";

export const AddTopicForm = (props) => {
    const [topicName, setTopicName] = useState("");

    return (
        <form onSubmit={ (e) => { e.preventDefault(); props.onAddAttribute(topicName) } } className="d-flex flex-column align-items-center justify-content-between" style={{ height: "20rem" }}>
            <span><b>Добавление темы</b></span>
            <div className="form-group">
                <span>Тема</span>
                <input type={'text'}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder={'тема'}
                    value={topicName}
                    required
                    onChange={ (e) => { setTopicName(e.target.value) } }/>
            </div>

            <button className="align-self-end btn btn-primary mx-auto ">Добавить тему</button>
        </form>
    );
} 