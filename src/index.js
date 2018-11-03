import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker'; 

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

// import './firebase/firebase';

import configureStore from './store/configureStore';

const store = configureStore();

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const jsx = (
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();