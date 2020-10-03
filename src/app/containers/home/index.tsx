import React, {useContext, useEffect, useState} from 'react';
import './home.scss';

import Header from '../../components/header';
import NoteList from '../note-list';
import FormModal from '../form-modal';
import { fetchNotes, addNote, deleteAllNotes,  deleteNote} from '../../store/reducers/notes';
import DeleteAlert from '../../components/delete-alert';

import { GlobalStateContext } from '../../store/index'
const Home = () => {

    const [state, dispatch] = useContext(GlobalStateContext);
    const [modal, setModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false)

    
    useEffect(() => {
        async function currentNotes() {
            await fetchNotes(dispatch)
        }
        currentNotes();
    }, [])

    const handleSubmit =  (event: any) => {
        event.preventDefault();
         addNote({
            id: event.target.title.value + (Math.floor(Math.random() * 100)+1),
            title: event.target.title.value,
            content: event.target.content.value,
            date: (new Date()).toLocaleString()
        }, dispatch)
        setModal(false);
    }

    const handleDelete = () => {
        deleteAllNotes(dispatch);
        handleAlert();
    }
    const handleAlert = () => {
        setIsDeleting((prev) => !prev);
    }

    const handleModal = (event: any) => {
        event.preventDefault();
        setModal((prevState: any) => !prevState)
    }

    const handleDeleteNote = (noteID: string) => {
        deleteNote(noteID, dispatch);
    }

    return(
        <>
            { isDeleting && <DeleteAlert handleDelete={handleDelete} onClose={handleAlert}/> }
            {modal && <FormModal handleModal={setModal} handleSubmit={handleSubmit}/>}
            <Header/>
        <div id="container">
            <NoteList 
                handleModal={handleModal} 
                notes={state.notes.list}
                onDelete={handleDeleteNote}
                handleAlert={handleAlert}/>
        </div>
        </>
    );
}

export default Home;