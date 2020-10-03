export const combineReducers = (reducers: any) => (state = {} as any, action: any) => {
   const dto: any =    {};
   for (let key in reducers) {
       dto[key] = reducers[key](state[key], action);
   }
    return dto;
}

export const reducerSelector = (initialState: any, reducers: any) =>
(state = initialState, action: any)=> {
    const reducer = reducers[action.type]
    if(reducer) {
        return reducer(state, action)
    }
    return state
}