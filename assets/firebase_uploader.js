/**
 * Created by tobiasbrunner on 02.11.17.
 */
//https://firebase.google.com/docs/firestore/quickstart
const admin = require('firebase-admin');

var serviceAccount = require("./importProjekt-478aba9ff144.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
});