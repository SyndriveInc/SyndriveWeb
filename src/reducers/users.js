import { ADD_VICTIM, REMOVE_VICTIM, EDIT_VICTIM } from './constants';

const victimsReducerDefaultState = [];

const victimsReducer = (state=victimsReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_VICTIM:
            return [
                ...state,
                action.victim,
            ];
        case REMOVE_VICTIM: 
            return state.filter( ({id} ) => id !== action.id );
        case EDIT_VICTIM: 
            return state.map((victim) => {
                if (victim.id === action.id) return {
                    ...victim,
                    ...action.updates,
                }
                else 
                    return victim;
            });
        default:
            return state;
    }
}

export default victimsReducer;