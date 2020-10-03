import { reducerSelector } from '../utils';
import {  getCurrentNotes , createNote, deleteAll, deleteOne} from '../../services/notes';


interface State {
    page: number
    list: Array<any>
    max_notes: number
}

export const notes = {
    page: 1,
    list: [] as any[],
    max_notes: 4
}

export enum ActionsTypes {
    POST_NOTE='post/notes',
    CLEAR_ALL='remove/notes'
}

export type Actions = {
    POST_NOTE: {type: ActionsTypes.POST_NOTE, payload: any}
    CLEAR_ALL: {type: ActionsTypes.CLEAR_ALL, payload: null}
}

export const notesReducer = reducerSelector(notes, {
    [ActionsTypes.POST_NOTE](state: State, a: Actions['POST_NOTE']) {
        const dto = {
            ...state,
            list: a.payload
        }
        return dto;
    },
    [ActionsTypes.CLEAR_ALL](state: State, a:Actions['CLEAR_ALL']){
        const dto = {
            ...state,
            page: 1,
            list: [] as any[]
        }
        return dto
    }
})

// ActionCreators
export const pushNotes = (notes: any, dispatch: any) => dispatch({type: ActionsTypes.POST_NOTE, payload: notes})
export const clearNotes = (dispatch: any) => dispatch({type: ActionsTypes.CLEAR_ALL, payload: null}) 

export function fetchNotes(dispatch: any) {
    getCurrentNotes().then(
        notes => {
            pushNotes(notes, dispatch)
        }
    )
}

export function addNote(note: any, dispatch: any) {
    createNote(note).then(r => {
        fetchNotes(dispatch)
    })
}

export function deleteAllNotes(dispatch: any) {
    deleteAll().then(r => {
        fetchNotes(dispatch)
    })
}

export function deleteNote(noteID: string, dispatch: any) {
    deleteOne(noteID).then(r => {
        fetchNotes(dispatch)
    })
}