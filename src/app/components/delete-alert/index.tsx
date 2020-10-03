import React from 'react';
import './alert.scss'

const DeleteAlert = ({handleDelete, onClose}: any) => {

    

    return (
        <div className="alert-container">
            <div className="alert-card">
                <div className="alert-header">
                    <h4>Delete all notes?</h4>
                </div>
                <div>
                    Are you sure?
                </div>
                <div className="alert-actions">
                    <div className="cancel-action" onClick={onClose}>
                        <span>Cancelar</span>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="agree-action" onClick={handleDelete}>
                        <span>Delete</span>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteAlert