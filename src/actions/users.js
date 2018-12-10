import { ADD_VICTIM, REMOVE_VICTIM, EDIT_VICTIM, SET_VICTIMS } from '../reducers/constants';
import database from '../firebase/firebase';

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
export const startAddVictims = (victimsData={}) => {
    return (dispatch) => {
        const {
            name='',
            dob='',
            bloodGroup='',
            lat=0,
            lng=0,
            photoURL='',
        } = victimsData;
        const victim = { name, dob, bloodGroup, lat, lng, photoURL };
        database.ref('accidents').push(victim)
            .then((ref) => {
                dispatch(addVictim({
                    id: ref.key,
                    ...victim,
                }));
            });
    }
}

export const removeVictim = ({ id } = {}) => ({
    type: REMOVE_VICTIM,
    id,
});
export const startRemoveVictim = ({ id } = {}) => {
    return async (dispatch) => {
        return database.ref(`accidents/${id}`).remove().then(() => {
            dispatch(removeVictim({ id }));
        });
    };
};

export const editVictim = (id, updates) => ({
    type: EDIT_VICTIM,
    id,
    updates,
});

export const setVictims = (victims) => ({
    type: SET_VICTIMS,
    victims,
});

export const startSetVictims = () => {
    return async (dispatch) => {
        return database.ref('accidents').once('value').then(snapshot => {
            const victims = [];
            snapshot.forEach((childSnapshot) => {
                victims.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                });
            })
            dispatch(setVictims(victims))
        });
    }
}