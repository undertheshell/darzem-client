import React from "react";
import { Link } from "react-router-dom";

export const BookCard = (props) => {
    return (
        <div className="card" style={{height: "20rem", width: "15rem"}}>
            <div className="card-body row d-block align-items-start">
                <h5 className="card-title">Название: {props.book.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Год: {props.book.year}</h6>
                <p className="card-text">Тема: {props.book.topic}</p>
                <p className="card-text">Автор: {props.book.author_name}</p>
            </div>
            <Link to={`/book/${props.book.id}`} className = "text-white text-center mb-3"><button className = "btn btn-primary">Подробнее</button></Link>
        </div>
    );
}