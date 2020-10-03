import React, { useReducer } from 'react';
import rootReducer from './reducers';
import { notes } from './reducers/notes';

export const GlobalStateContext = React.createContext([]);

const Store = ({children}: any) => {
    const [state, dispatch] = useReducer(rootReducer, {
        notes
    });
    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export default Store;