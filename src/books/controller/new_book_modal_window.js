import React, { useContext, useEffect } from "react";

import '../view/modal_window_styles.css'
import { ModalWindowView } from "../view/modal_window_view";
import { useBooks } from "../model/useBooks";
import { AppContext } from "../../app/model/context";
import { AddBookForm } from "../view/add_book_form_view";
import { useNavigate } from "react-router-dom";

export const NewBookModalWindow = (props) => {
    
    const { userId } = useContext(AppContext);
    const { getAllBookAttributes, addBook, bookAttributes, loading, error } = useBooks();
    const navigate = useNavigate();

    
    const onKeydown = ({ key }) => { if (key === 'Escape') props.onClose(); }
    
    useEffect(() => {
        getAllBookAttributes();
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    }, []);
    
    if(!props.visible) return;

    const createBook = async (newBook) => {
        if(newBook.title.trim()) 
        {
            const {data, status} = await addBook({
                    ...newBook, 
                    title: newBook.title.trim(),
                    userId 
                });
            if(await status < 400)
            {
                props.onClose();
                navigate("/main", { state: { data } });
            }
        }        
    }

    return ( 
    <ModalWindowView 
        onClose = {props.onClose}  
        error = {error} 
        loading = {loading} 
        content = {<AddBookForm bookAttributes = { bookAttributes } handleBook = {createBook}/>}
    /> );
}