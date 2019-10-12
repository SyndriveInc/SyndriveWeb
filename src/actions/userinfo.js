import { LOGIN, LOGOUT } from '../reducers/constants';

export const login = ({ displayName='', email='', photoURL=undefined, uid='', emailVerified=false, userName='', providerData }) => ({
    type: LOGIN,
    user: {
        displayName, // from Google
        email,
        photoURL,
        uid,
        emailVerified: providerData[0].providerId === 'password' ? emailVerified : true,
        // userName, // for app purpose
        providerId: providerData[0].providerId,
    }
});
export const logout = () => ({
    type: LOGOUT,
});