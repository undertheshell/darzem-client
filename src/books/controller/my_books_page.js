import React, { useEffect, useContext, useState } from "react";
import { useBooks } from "../model/useBooks";
import { AppContext } from "../../app/model/context";
import { BooksListView } from "../view/books_list_view";
import { Link } from "react-router-dom";
import { NewBookModalWindow } from "./new_book_modal_window";
import { Loader } from "../../app/view/loading_view";
import { Error } from "../../app/view/error_view";

export const MyBooksPage = () => {
    
    const { userId } = useContext(AppContext)
    const { getMyBooks, addBook, myBooks, error, loading } = useBooks()
    const [modalVisible, setModalVisible] = useState(false)
    const closeModal = () => setModalVisible(false)
    
    useEffect(() => {
        getMyBooks(userId);
    }, [])

    if (loading) return <Loader/>
    if (error) return <Error error = {error}/>

    return ( 
        <div className="d-column justify-content-around mt-2">
            <h1>Прочитанные книги</h1>
            
            {myBooks.length ? 
            <BooksListView books = {myBooks}/> 
        : 
            <div className="container text-center p-5">
                <h1>У вас ещё нет прочитанных книг</h1>
                <Link to={"/books"} className="btn btn-primary mt-5"><h2>перейти к каталогу...</h2></Link>
            </div>}
            <NewBookModalWindow visible = {modalVisible} onClose = {closeModal} addBook = {addBook}/>
        </div>
     );
}