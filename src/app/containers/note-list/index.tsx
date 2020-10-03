import React, {useState} from 'react';
import './note_list.scss'

import Note from '../../components/note';
import SearchInput from '../../components/search-input';


const NoteList = ({handleModal, notes, handleAlert, onDelete}: any) => {

    const [query, setQuery] = useState("");

    const onSearch = async (event: any) => {
        const value = (event.target?.value as string).toLowerCase();
        await setQuery(value);
    }

    const noteList = (notes || []).filter((note: any) => (note?.title.toLowerCase()).indexOf(query) != -1)

    return (
        <div className="list-container">
            <div className="list-wrapper">
                <div className="list-header">
                    <div className="list-header-wrapper">
                        <SearchInput onSearch={onSearch}/>
                        <div className="add-note-btn"
                        onClick={handleModal}>
                            <i className="fas fa-plus"></i>
                        </div>
                        <div className="delete-all-btn"
                        onClick={handleAlert}>
                            <i className="far fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="list">
                    {noteList.map((n: any, i: number) => <Note key={n+i} data={n} onDelete={() => onDelete(n?.id || "")}/>)}
                </div>
            </div>
        </div>
    )
}



export default NoteList;