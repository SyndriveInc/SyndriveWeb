import React from 'react';
import PropTypes from 'prop-types';
import './SignIn.css';
import { withStyles, Button, Input, InputLabel } from '@material-ui/core';
import authComponentStyle from '../../assets/jss/authComponentStyle';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center card'>
                <main className='pa4 white'>
                    <div className='measure'>
                        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                            <legend className='f1 fw6 ph0 mh0 blue'>Sign In</legend>
                            <div className='mt3'>
                                <input className='pa2 input-reset ba bg-transparent hover-black w-100 field'
                                    type='email' name='email-address' id='email-address'
                                    placeholder='Email'
                                />
                                {/*<Input />*/}
                            </div>
                            <div className='mv3'>
                                <input className='b pa2 input-reset ba bg-transparent hover-black w-100 field'
                                    type='password' name='password' id='password'
                                    placeholder='Password'
                                />
                                {/*<Input />*/}
                            </div>
                        </fieldset>
                        <div className=''>
                            <Button variant='contained'
                                color='primary'>
                                Sign In
				  	</Button>
                        </div>
                        <div className='lh-copy mt3'>
                            <p className='f6 link dim black pointer db blue'>Sign up</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(authComponentStyle, { withTheme: true })(SignIn);