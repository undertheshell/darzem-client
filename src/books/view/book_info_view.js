import React from "react";

export const BookInfo = (props) => {

    return (
        <div className="container row m-5">
            <div className = "col-8">
                <h1>Описание книги</h1>
                <h3><b>Название: </b>{props.book.title}</h3>
                <h3><b>Год выпуска: </b>{props.book.year}</h3>
                <h3><b>Автор: </b>{props.book.author_name}</h3>
                <h3><b>Тема: </b>{props.book.topic}</h3>
                <h3><b>Жанр: </b>{props.book.genre}</h3>
                <h3><b>Язык: </b>{props.book.language}</h3>
                <hr/>
                <h3><b>Издательство: </b>{props.book.publishing_house_name}</h3>
                <h3><b>Город: </b>{props.book.publishing_house_city}</h3>
                <h3><b>Страна: </b>{props.book.publishing_house_country}</h3>
                <h3><b>Email: </b>{props.book.publishing_house_email}</h3>
                <hr/>
                <h3><b>Обзоры: </b>{
                props.book.reviews.length ?
                    props.book.reviews.map(review => { return <p key={review}>{`- "${review}"`}</p> })
                    :
                    <>Обзоров нет</> }</h3>
                <h3><b>Рейтинг: </b>{props.book.rating} из 10 </h3>
            </div>
            <div className="column col-4">
                <button 
                    className="btn btn-primary my-1" 
                    onClick={() => props.openRateModal()}
                    disabled = {props.allowRate}
                    >
                        Пометить книгу прочитанной
                </button>
                <button 
                    className="btn btn-secondary my-1" 
                    onClick={() => props.openEditModal()}>
                        Изменить книгу
                </button>
                <button 
                    className="btn btn-danger my-1" 
                    onClick={() => props.onBookDelete(props.book.id)}>
                        Удалить книгу
                </button>
            </div>
        </div>
    );
}