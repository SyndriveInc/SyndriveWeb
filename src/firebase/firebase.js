import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAharVgI1d_UK9rXYlQj-3WCYqkUpoyJD4",
    authDomain: "syndrive-209515.firebaseapp.com",
    databaseURL: "https://syndrive-209515.firebaseio.com",
    projectId: "syndrive-209515",
    storageBucket: "syndrive-209515.appspot.com",
    messagingSenderId: "885138541108"
};
firebase.initializeApp(config);

let users = [];

const database = firebase.database();
/* database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        // console.log(val);
        users = val.users;
    })
    .catch((e) => {
        console.log('Error fetching data ', e);
    }); */

export { firebase, database as default };