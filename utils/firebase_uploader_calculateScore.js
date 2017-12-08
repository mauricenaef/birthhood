/**
 * Created by tobiasbrunner on 02.11.17.
 * 
 * Upload Birthplaces. Currently JSON Objects are stored in the js file
 * 
 * TODO: 
 * read external JSON file.
 * 
 * Start from npm
 * 
 * 
 * 
 */
//https://firebase.google.com/docs/firestore/quickstart
//const admin = require('firebase-admin');

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var config = {
    apiKey: "AIzaSyBo-NplVsfsCeD_m_kZ_6Y8BzNnVKTHbIo",
    authDomain: "birthhood.firebaseapp.com",
    databaseURL: "https://birthhood.firebaseio.com",
    projectId: "birthhood",
    storageBucket: "birthhood.appspot.com",
    messagingSenderId: "986661546141"
  };
firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
//var birthplaces;

var birthplaces = db.collection('birthplaces');






var item = birthplaces.where('NAME', '>=', '');
item.get().then(function(querySnapshot) {
 querySnapshot.forEach(function(doc) {
     //console.log(doc.data()["NAME"]);
     //console.log(doc.id);

     var experiences = db.collection('birthexperiences').where('birthplace_id', '==', doc.id);



    var b = [];
    var g= [];
    var i= [];
    var u= [];
    var w= [];


     experiences.get().then(exp => {
      exp.forEach( thisexperience => {
        console.log(thisexperience.u1);
        //b.push(thisexperience.b1)
      });

     })
     //
     //birthexperience["birthplace_id"] = doc.id;
     //delete birthexperience["birthplace"];
     //uploadExerience(birthexperience)
     });
 })
 .catch(function(error) {
     console.log("Error getting documents: ", error);
 });


  //get birthplaces

  //loop

  //get experiences

  //calculate Score

  //end loop
/*
  let i = 0;
 for (birthplace of birthplaces) {
     
     //console.log(birthplace);
 
  db.collection("birthplaces").add(birthplace)
.then(function(docRef) {
    console.log(i);
    i++;
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
 }

/*
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
});*/