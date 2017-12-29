const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.logWrite = functions.firestore
  .document('birthexperiences/{documentId}')
  .onWrite((event) => {
    var db = admin.firestore();
    let birthplaceid = event.data.get('birthplace_id');
    let birthdate = event.data.get('birth_date');
    console.log(event);
    let experiences = db.collection('birthexperiences').where('birthplace_id', '==', birthplaceid);
    db.collection('messages').add({"birthdate": birthdate});
  });