import * as React from 'react';
import ReviewForm from '../../components/note-form';
import './modal.scss';

const FormModal = ({handleModal, handleSubmit}: any) => {

    const handleModalClose = async() => {
        await handleModal((prevstate: any) => !prevstate)
    }

    return (
        <div className="modal-container">
            <div className="modal-wrapper">
                <div className="card">
                <div className="card-header">
                    <h4>Create Note</h4>
                    <div className="close-btn"  onClick={handleModalClose}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <div className="card-content">
                    <ReviewForm handleSubmit={handleSubmit}/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default FormModal;