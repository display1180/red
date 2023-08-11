import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD-1vdg0zf1SLb0jqXkP3ISz1_lBfiiiXo',
	authDomain: 'react-bowie.firebaseapp.com',
	projectId: 'react-bowie',
	storageBucket: 'react-bowie.appspot.com',
	messagingSenderId: '852544152349',
	appId: '1:852544152349:web:7b1a2cfd878177fa2eb7f4',
	measurementId: 'G-HPMZNP8QS4',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
