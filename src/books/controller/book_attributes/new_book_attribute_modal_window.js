import React, {useEffect } from "react";

import { ModalWindowView } from "../../view/modal_window_view";

export const NewBookAttributeModalWindow = (props) => {
        
    const onKeydown = ({ key }) => { if (key === 'Escape') props.onClose(); }
    
    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    }, []);
    
    if(!props.visible) return;

    return ( 
    <ModalWindowView
        onClose = {props.onClose}  
        error = {false} 
        loading = {false} 
        content = {props.attributeForm}
    /> );
}