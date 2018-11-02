import { ADD_VICTIM, REMOVE_VICTIM, EDIT_VICTIM } from '../reducers/constants';


export const addVictim = ({ id=0, name='', dob=0, bloodGroup='', lat=0.0, lng=0.0, photoURL=''} = {}) => ({
    type: ADD_VICTIM,
    victim: {
        id,
        name,
        dob,
        bloodGroup,
        lat,
        lng,
        photoURL,
    }
});

export const removeVictim = ({ id } = {}) => ({
    type: REMOVE_VICTIM,
    id,
});

export const editVictim = (id, updates) => ({
    type: EDIT_VICTIM,
    id,
    updates,
});