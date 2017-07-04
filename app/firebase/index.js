import firebase from 'firebase';

try {
    const config = {
        apiKey: "AIzaSyBjRkTjMGt6d-XdUn4pZicQmBDGAsEjjxc",
        authDomain: "amaro-todo-app.firebaseapp.com",
        databaseURL: "https://amaro-todo-app.firebaseio.com",
        projectId: "amaro-todo-app",
        storageBucket: "amaro-todo-app.appspot.com",
        messagingSenderId: "89084095529"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();

export default firebase;