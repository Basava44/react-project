import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import configObject from './configObject'


firebase.initializeApp(configObject);
firebase.firestore().settings({ timeStampsInSnapshots : true });

export default firebase