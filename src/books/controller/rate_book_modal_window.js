import React, { useContext, useEffect } from "react";

import '../view/modal_window_styles.css'
import { ModalWindowView } from "../view/modal_window_view";
import { useBooks } from "../model/useBooks";
import { AppContext } from "../../app/model/context";
import { RateBookForm } from "../view/rate_book_form_view";
import { useNavigate } from "react-router-dom";

export const RateBookModalWindow = (props) => {
    
    const { userId } = useContext(AppContext);
    const { setBookRead, error } = useBooks();
    const navigate = useNavigate();

    
    const onKeydown = ({ key }) => { if (key === 'Escape') props.onClose(); }
    
    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    }, []);
    
    if(!props.visible) return;

    const onSetRead = async (review, rating) => {
        if(review.trim()) 
        {
            const {data, status} = await setBookRead(props.bookId, userId, review.trim(), rating);
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
            loading = {false}
            content = {<RateBookForm onBookRead = {onSetRead}/>}
        /> );
}