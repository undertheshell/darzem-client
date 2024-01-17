import React, { useState } from "react";

export const EditBookForm = (props) => {

    const [bookInfo, setBookInfo] = useState(
        {
            title: props.book.title, 
            topic: "", 
            publishingHouse: "", 
            author: "",
            genre: "", 
            language: "",
            year: props.book.year, 
            bookId: props.book.id
        }
    );

    const submitForm = () => {
        if( bookInfo.topic && bookInfo.publishingHouse && bookInfo.author && bookInfo.genre && bookInfo.language ){
            props.onSaveEdited(bookInfo.title, bookInfo.topic, bookInfo.publishingHouse, bookInfo.year, bookInfo.genre, bookInfo.language, bookInfo.author, bookInfo.bookId);
        }
    }

    return (
        <form 
            className="d-flex flex-column align-items-center justify-content-between"
            onSubmit={ (e) => { 
                e.preventDefault(); 
                submitForm();
                 }}>
            <span><b>Изменение книги</b></span>
            <div className="form-group">
                <span>Название книги</span>
                <input type={'text'}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder={'Название'}
                    value={bookInfo.title}
                    required
                    onChange={ (e) => { setBookInfo({ ...bookInfo, title: e.target.value}) } }/>
            </div>

            <div className="form-group">
            <span>Тема</span>
                <select className="border-1 form-control"
                        style={{backgroundColor: "#f5f5f5"}}
                        onChange={event => setBookInfo({...bookInfo, topic: event.target.value })}
                        required>
                            <option selected disabled>Тема</option>
                    {props.bookAttributes.topics.map( (topic) => { return ( 
                        <option key={topic.topic_id} 
                            value={topic.topic_id}
                            >
                                {topic.topic_name}
                        </option>) } )}
                </select>
            </div>

            <div className="form-group">
            <span>Издательство</span>
                <select className="border-1 form-control"
                        style={{backgroundColor: "#f5f5f5"}}
                        onChange={event => setBookInfo({...bookInfo, publishingHouse: event.target.value })}
                        required>
                            <option selected disabled>Издательство</option>
                    {props.bookAttributes.publishingHouses.map( (house) => { return ( 
                        <option key={house.id} 
                            value={house.id} >
                                {`${house.name} - ${house.country}`}
                                </option> ) } )}
                </select>
            </div>

            <div className="form-group">
            <span>Автор</span>
                <select className="border-1 form-control"
                        style={{backgroundColor: "#f5f5f5"}}
                        onChange={event => setBookInfo({...bookInfo, author: event.target.value })}
                        required>
                            <option selected disabled>Автор</option>
                    {props.bookAttributes.authors.map( (author) => { return ( 
                        <option key={author.author_id} 
                            value={author.author_id}>
                                {author.name}
                        </option> ) } )}
                </select>
            </div>

            <div className="form-group">
            <span>Жанр</span>
                <select className="border-1 form-control"
                        style={{backgroundColor: "#f5f5f5"}}
                        onChange={event => setBookInfo({...bookInfo, genre: event.target.value })}
                        required>
                            <option selected disabled>Жанр</option>
                    {props.bookAttributes.genres.map( (genre) => { return ( 
                        <option key={genre.genre_id} 
                            value={genre.genre_id}>
                                {genre.name}
                        </option> ) } )}
                </select>
            </div>

            <div className="form-group">
            <span>Язык</span>
                <select className="border-1 form-control"
                        style={{backgroundColor: "#f5f5f5"}}
                        onChange={event => setBookInfo({...bookInfo, language: event.target.value })}
                        required>
                            <option selected disabled>Язык</option>
                    {props.bookAttributes.languages.map( (language) => { return ( 
                        <option key={language.language_id} 
                            value={language.language_id}>
                                {language.name}
                        </option> ) } )}
                </select>
            </div>

            <div className="form-group">
                <span >Год</span>
                <input type="number"
                    min={1600} 
                    max={new Date().getFullYear()}
                    step={1}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    value={bookInfo.year}
                    required
                    onChange={ (e) => { setBookInfo({ ...bookInfo, year: parseInt(e.target.value)}) } } />
            </div>

            <button 
                className="align-self-end btn btn-primary mx-auto"
                disabled={!(bookInfo.topic && bookInfo.publishingHouse && bookInfo.author && bookInfo.genre && bookInfo.language)}
                >
                    Изменить книгу
            </button>
        </form>
    );
} 