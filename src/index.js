import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import './firebase/firebase';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
