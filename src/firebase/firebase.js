import firebase from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: 'AIzaSyCx8A_6Qcvn4vavDVE2tN3Kxy4AY8E06XI',
	authDomain: 'expensify-d7f44.firebaseapp.com',
	databaseURL: 'https://expensify-d7f44.firebaseio.com',
	projectId: 'expensify-d7f44',
	storageBucket: 'expensify-d7f44.appspot.com',
	messagingSenderId: '462420842453',
};

firebase.initializeApp(config);

firebase
	.database()
	.ref()
	.set({
		name: 'Pedro Medina',
	});
