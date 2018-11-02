import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import CardList from './components/CardList/CardList';
// import Scroll from './components/Scroll';
import Title from './components/Title';
import users from './components/users.js';
import Particles from 'react-particles-js';
// import firebase from 'firebase';

// const users = configureUsers();

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

class App extends Component {
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

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }
  
    render() {
        const { isSignedIn, users } = this.state;
        // const filteredUsers = users;

        return (
          <div className="App">
            <Particles className='particles'
                params={particlesOptions}
                style={{width: '100%'}}
            />
          </div>
        );
      }
    }

export default App;