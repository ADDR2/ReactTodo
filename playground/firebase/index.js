import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBjRkTjMGt6d-XdUn4pZicQmBDGAsEjjxc",
    authDomain: "amaro-todo-app.firebaseapp.com",
    databaseURL: "https://amaro-todo-app.firebaseio.com",
    projectId: "amaro-todo-app",
    storageBucket: "amaro-todo-app.appspot.com",
    messagingSenderId: "89084095529"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Amaro',
        age: 24
    }
}).then((response) => {
    console.log('It worked');
}, (error) => {
    console.log(error);
});

// const notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });

// const newNoteRef = notesRef.push({
//     test: 'Walk the dog!'
// });

// console.log('Todo id', newNoteRef.key);

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('User ref changed', snapshot.val());
// });

// firebaseRef.update({
//     'user/name': 'Mike'
// });

// firebaseRef.update({
//     'app/name': 'Todo'
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.key, snapshot.val());
// }, (error) => {
//     console.log('Unable to fetch data', error);
// });

// let logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };

// firebaseRef.on('value', logData);

// firebaseRef.off('value', logData);

// firebaseRef.off();

// firebaseRef.update({
//     isRunning: false
// });

/*firebaseRef.update({
    'app/name': 'Todo Application',
    'user/name': 'Amaro Duarte'
});*/

/*firebaseRef.child('app').update({
    name: 'Todo Application'
});

firebaseRef.child('user').update({
    name: 'Amaro Duarte'
});*/

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//     name: null,
//     version: '2.0.0'
// });

// firebaseRef.update({
//     isRunning: null
// });