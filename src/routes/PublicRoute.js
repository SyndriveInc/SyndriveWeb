import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest,
}) => (
        <Route {...rest} component={(props) => (
            !isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect to='/home' />
                )
        )} />
    );

const mapStateToProps = state => ({
    isAuthenticated: !!state.userinfo.uid
});

export default connect(mapStateToProps)(PublicRoute);