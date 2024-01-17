import React, { useContext, useEffect, useState} from "react";
import { useBooks } from "../model/useBooks";
import { useParams, useNavigate } from "react-router-dom";
import { BookInfo } from "../view/book_info_view";
import { Loader } from "../../app/view/loading_view";
import { Error } from "../../app/view/error_view";

import { RateBookModalWindow } from "./rate_book_modal_window";
import { AppContext } from "../../app/model/context";
import { EditBookModalWindow } from "./edit_book_modal_window";

export const BookInfoPage = () => {
    const { userId } = useContext(AppContext)
    const { getBook, deleteBook, getMyBooks, getAllBookAttributes, editBook, bookAttributes, myBooks, error, loading, bookInfo } = useBooks();
    const params = useParams();
    const navigate = useNavigate();
    const [rateModalVisible, setRateModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const closeModal = () => {setRateModalVisible(false); setEditModalVisible(false)};
    
    useEffect(() => {
        getAllBookAttributes();
        getMyBooks(userId);
        getBook(params.id);
    }, [])

    const onBookDelete = async (bookId) => {
        if (window.confirm("Вы уверены, что хотите удалить книгу?")) {
            const { data, status } = await deleteBook(bookId);
            if(await status < 400) {
                navigate("/main", { state: { data } });
            }
        }
    }

    if(!params || !params.id) return <h1>Вы попали на несуществующую страницу</h1>
    while (loading || bookInfo == null) return <Loader/> 
    if (error) return <Error error={error}/>

    return ( 
    <div>
        <BookInfo 
            book = {bookInfo} 
            onBookDelete = {onBookDelete} 
            openRateModal = {() => setRateModalVisible(true)}
            openEditModal = {() => setEditModalVisible(true)}  
            bookId = {bookInfo.id} 
            allowRate = {myBooks.some(book => book.id === bookInfo.id)}
        />
        <RateBookModalWindow visible = {rateModalVisible} onClose = {closeModal} bookId = {bookInfo.id} />
        <EditBookModalWindow visible = {editModalVisible} onClose = {closeModal} book = {bookInfo} bookAttributes = {bookAttributes} editBook={editBook}/>
    </div>
     );
}