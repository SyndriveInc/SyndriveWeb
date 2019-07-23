import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import 'tachyons';
// import { startSetVictims } from './actions/users';
import registerServiceWorker from './registerServiceWorker'; 

// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import configureStore from './store/configureStore';

const store = configureStore();

// const theme = createMuiTheme({
//     palette: {
//         primary: green,
//     },
// });

const jsx = (
    // <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    // </MuiThemeProvider>
);

// ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

// store.dispatch(startSetVictims()).then(() => {
//     ReactDOM.render(jsx, document.getElementById('root'));
// });

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();