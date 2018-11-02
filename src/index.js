import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import './firebase/firebase';

//COMPONENTS
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
