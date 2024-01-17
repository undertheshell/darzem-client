import React, { useContext, useEffect } from "react";

import '../view/modal_window_styles.css'
import { ModalWindowView } from "../view/modal_window_view";
import { useNavigate } from "react-router-dom";
import { EditBookForm } from "../view/edit_book_form_view";

export const EditBookModalWindow = (props) => {
    const navigate = useNavigate();
    const onKeydown = ({ key }) => { if (key === 'Escape') props.onClose(); }
    
    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    }, []);
    
    if(!props.visible) return;

    const onSaveEdited = async(title, topic, publishing_house, year, genre, language, author, bookId) => {
        if(title.trim())
        {
            const { data, status } = await props.editBook(title.trim(), topic, publishing_house, year, genre, language, author, bookId);
            if(await status < 400) navigate("/main", { state: { data } });
        } 
    }

    return ( 
        <ModalWindowView 
            onClose = {props.onClose} 
            error = {false} 
            loading = {false}
            content = {<EditBookForm onSaveEdited = {onSaveEdited} book = {props.book} bookAttributes = {props.bookAttributes}/>}
        /> );
}