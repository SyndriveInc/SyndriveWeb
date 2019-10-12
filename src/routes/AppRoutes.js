import React, { lazy, Suspense } from 'react';
import './App.css';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Loader } from '../components/Loader/Loader';
// import Particles from 'react-particles-js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// import Navigation from './components/Navigation/Navigation';
const SignIn = lazy(() => import('../containers/SignIn/SignIn'));
const SignUp = lazy(() => import('../containers/SignUp/SignUp'));
// import CardList from './components/CardList/CardList';
const NavDrawer = lazy(() => import('../components/Navigation/Navigation'));
const NotFound = lazy(() => import('../containers/NotFound'));
const LandingPage = lazy(() => import('../containers/LandingPage/LandingPage'));
const Header = lazy(() => import('../components/Header/Header'));

// const users = configureUsers();

export const history = createHistory();

// const particlesOptions = {
//     particles: {
//         number: {
//             value: 30,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         color: {
//             value: '#FF00FF'
//         }
//     }
// }

const App = () => (
    <Router history={history}>
        <div className='container'>
            <Suspense fallback={<Loader />}>
                <Header />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <PrivateRoute path='/dashboard' component={NavDrawer} />
                    <PublicRoute path='/signin' component={SignIn} />
                    <PublicRoute path='/register' component={SignUp} />
                    {/* Add Victims page, History page */}
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </div>
    </Router>
);

export default App;