import React, { useEffect, useState } from "react"
import { useBooks } from "../model/useBooks";
import { BooksListView } from "../view/books_list_view";
import { Link } from "react-router-dom";
import { NewBookModalWindow } from "./new_book_modal_window";
import { Loader } from "../../app/view/loading_view";
import { Error } from "../../app/view/error_view";

export const AllBooksPage = () => {
    const { getAllBooks, addBook, books, loading, error } = useBooks();
    const [modalVisible, setModalVisible] = useState(false)
    const closeModal = () => setModalVisible(false)
    
    useEffect(() => {
        getAllBooks();
    }, [])

    if (loading) return <Loader/>
    if (error) return <Error error = {error}/>
    

    return ( 
        <div className="m-0">
            <div className="d-flex justify-content-around mt-2">
                <h1>Каталог книг</h1>
                <button className="btn btn-primary" onClick={() => setModalVisible(true)}>
                    Добавить книгу
                </button>
            </div>
            <div>
                {books.length ? 
                <BooksListView books = {books}/> 
            : 
                <div className="container text-center p-5">
                    <h1>Каталог книг пустой.Вы можете добавить какую-нибудь книгу</h1>
                </div>}
                <NewBookModalWindow visible = {modalVisible} onClose = {closeModal} addBook = {addBook}/>
            </div>
        </div>
     );
}