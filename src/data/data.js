import 'dotenv/config';

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "projecto-final-talentotech",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "81152615222",
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-PRH855456Y"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;