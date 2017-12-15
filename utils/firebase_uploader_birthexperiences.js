/**
 * Created by tobiasbrunner on 02.11.17.
 * 
 * 
 * Upload Birthexperiences.
 * Gets Birthplace ID from firestore. Birthplaces therefore have to be uploaded beforehand.
 * 
 *  
 * TODO:
 * Read external JSON file
 * 
 * Create NPM-Task
 * Combine with Birthplace Uploader
 * 
 * 
 */
//https://firebase.google.com/docs/firestore/quickstart
//const admin = require('firebase-admin');

var serviceAccount = require("./birthhood-0bd55101ecab.json");
//const firebase = require("firebase");
const admin = require('firebase-admin');
let fs = require('fs')
//import * as firebase from 'firebase'
require('firebase/firestore');
var config = {
  apiKey: "AIzaSyBo-NplVsfsCeD_m_kZ_6Y8BzNnVKTHbIo",
  authDomain: "birthhood.firebaseapp.com",
  databaseURL: "https://birthhood.firebaseio.com",
  projectId: "birthhood",
  storageBucket: "birthhood.appspot.com",
  messagingSenderId: "986661546141",
  credential: admin.credential.cert(serviceAccount)
};
admin.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = admin.firestore();
content = fs.readFileSync('birthexperience_data.json');
let birthexperiences = JSON.parse(content);


let i = 0;
var birthplaces = db.collection('birthplaces');
for (let birthexperience of birthexperiences) {
  var item = birthplaces.where('name', '==', birthexperience["birthplace"]);
  item.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      birthexperience["birthplace_id"] = doc.id;
      delete birthexperience["birthplace"];
      uploadExerience(birthexperience)
    });
  })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}

function uploadExerience(experience) {
  db.collection("birthexperiences").add(experience)
    .then(function (docRef) {
      console.log(i);
      i++;
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
