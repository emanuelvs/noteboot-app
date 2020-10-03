import * as React from 'react'
import './note.scss'


export interface NoteProps {
    data: any
    onDelete: () => void;
}
 
const Note: React.FunctionComponent<NoteProps> = ({data, onDelete}) => {
    
    const [date, hours] = data?.date?.split(" ") || ["", ""];
    return ( 
        <div className="note-card">
            <div className="note-wrapper">
                <div className="note-info">
                    <h4 className="note-title">
                        {data.title}
                    </h4>
                    <span>{date}</span>
                    <span>{hours}hs</span>
                </div>
                <div className="note-content">
                    <div className="delete-one"
                    onClick={onDelete}>
                        <i className="far fa-trash-alt"></i>
                    </div>
                    <p className="note-letters">
                        {data.content}
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Note;