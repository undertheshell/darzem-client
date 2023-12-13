import React, { useState } from "react";

export const RateBookForm = (props) => {
    const [bookRate, setBookRate] = useState(
        {
            review: "", 
            rating: 0
        }
    );

    return (
        <form onSubmit={ (e) => { e.preventDefault(); props.onBookRead(bookRate.review, bookRate.rating) } } className="d-flex flex-column align-items-center justify-content-between" style={{ height: "20rem" }}>
            <span><b>Оцените прочитанную книгу</b></span>
            <div className="form-group">
                <span>Ваш отзыв</span>
                <textarea type={'text'}
                    rows="3"
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder={'Отзыв'}
                    value={bookRate.review}
                    required
                    onChange={ (e) => { setBookRate({ ...bookRate, review: e.target.value}) } }/>
            </div>

            <div className="form-group">
                <span >Ваша оценка (0...10)</span>
                <input type="number"
                    min={0} 
                    max={10}
                    step={1}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    value={bookRate.rating}
                    required
                    onChange={ (e) => { setBookRate({ ...bookRate, rating: parseInt(e.target.value)}) } } />
            </div>

            <button className="align-self-center btn btn-primary mx-auto ">Пометить книгу прочитанной с текщим отзывом</button>
        </form>
    );
} 