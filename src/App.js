import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

// import Navigation from './components/Navigation/Navigation';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import CardList from './components/CardList/CardList';
import NavDrawer from './components/Navigation/Navigation';
import NotFound from './containers/NotFound';
import LandingPage from './containers/LandingPage/LandingPage';

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// const users = configureUsers();

export const history = createHistory();

const particlesOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#FF00FF'
        }
    }
}

const App = () => (
    <Router history={history}>
        <div className='container'>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/dashboard' component={NavDrawer} />
                <Route path='/signin' component={SignIn} />
                <Route path='/register' component={SignUp} />
                {/* Add Victims page, History page */}
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

/* class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            users: users,
            isChecked: false
        }
    }

    //    componentDidMount() {
    //     axios.get('https://syndrive-209515.firebaseio.com/users/' + user.uid + '.json?auth='AIzaSyAharVgI1d_UK9rXYlQj-3WCYqkUpoyJD4')
    // 		.then(response => response.json())
    // 		.then(users => this.setState({ users: users }));
    // 		});
    // }

    render() {
        const { isSignedIn, users } = this.state;
        // const filteredUsers = users;

        return (
            <div className='App'>
                <Particles className='particles'
                    params={particlesOptions}
                    style={{ width: '100%' }}
                />
            </div>
        );
    }
} */

export default App;