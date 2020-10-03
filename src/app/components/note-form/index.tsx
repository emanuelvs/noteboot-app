import React from 'react';

import './form.scss'

const ReviewForm = ({handleSubmit}: any) => {

    return (
        <div className="form-container">
            
                <form onSubmit={handleSubmit}>
                    <div className="form-wrapper">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="note-title" placeholder="Type a title"/>
                        <label htmlFor="content">Content</label>
                        <textarea name="content" id="note-content" cols={40} rows={4} placeholder="Type a content"/>
                        <button type="submit" className="save-btn">
                            <i className="fas fa-check"></i>
                            <span className="save">Save</span>
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default ReviewForm;