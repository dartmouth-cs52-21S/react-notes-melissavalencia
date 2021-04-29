import firebase from 'firebase';
// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: 'AIzaSyBebu6zQ25oX1vTS17q-n0c_Tr3ett5Mww',
  authDomain: 'firenotes-87b6b.firebaseapp.com',
  databaseURL: 'https://firenotes-87b6b-default-rtdb.firebaseio.com',
  projectId: 'firenotes-87b6b',
  storageBucket: 'firenotes-87b6b.appspot.com',
  messagingSenderId: '197806495079',
  appId: '1:197806495079:web:cfcc4c80f8fe0999224bc2',
  measurementId: 'G-TKEPQNYWYD',
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// Get a reference to the database service
const database = firebase.database();

export function createNote(title) {
  database.ref('notes').push(title);
}

export function updateNote(id, data) {
  firebase.database().ref('notes').child(id).update(data);
}

export function deleteNote(id) {
  firebase.database().ref('notes').child(id).remove();
}

export function fetchNotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}
