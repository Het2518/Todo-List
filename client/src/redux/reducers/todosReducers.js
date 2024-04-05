import * as actionType from "../actions/type";

export const todosReducers = (state = [], action) => {
    switch (action.type) {
        case actionType.ADD_NEW_TODOS:
            return [action.payload, ...state];
        default:
            return state;
    }
}