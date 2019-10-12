import React from 'react';
// import PropTypes from 'prop-types';
import './SignIn.css';
// import { withStyles, Button, InputLabel, InputAdornment, Input } from '@material-ui/core';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { firebase } from '../../firebase/firebase';

// import authComponentStyle from '../../assets/jss/authComponentStyle';

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/dashboard',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ]
};

const SignIn = () => {
    return (
        <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center card'>
            <main className='pa4 white'>
                <div className='measure'>
                    <fieldset id='sign_in' className='ba b--transparent ph0 mh0'>
                        <legend className='f2 fw6 ph0 mh0 blue tc'>Login</legend>
                    </fieldset>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    {/* <div>
                        <Button
                            variant='contained'
                            color='primary'>
                            Sign In
                        </Button>
                    </div> */}
                    {/* <div className='lh-copy mt3'>
                        <p className='f6 link dim black pointer center db blue'>Sign up</p>
                    </div> */}
                </div>
            </main>
        </article>
    );
}

/* SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}; */

// export default withStyles(authComponentStyle, { withTheme: true })(SignIn);
export default SignIn;