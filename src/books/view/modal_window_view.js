import React from "react";
import { Error } from "../../app/view/error_view";
import { Loader } from "../../app/view/loading_view";

export const ModalWindowView = (props) => {

    const modalWindowWithContent = (content) => {
        return (
            <div className='modal' onClick={() => props.onClose()}>
                <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                    <div className='modal-body'>
                        <div className='modal-content'>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (props.loading) return modalWindowWithContent(<Loader/>);
    if (props.error) return modalWindowWithContent(<Error error = {props.error}/>);    

    return modalWindowWithContent(props.content);
}