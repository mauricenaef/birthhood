/**
 * Created by tobiasbrunner on 02.11.17.
 * 
 * Upload Birthplaces. Currently JSON Objects are stored in the js file
 * 
 * TODO: 
 * Start from npm
 * 
 */
//https://firebase.google.com/docs/firestore/quickstart

const https = require("https");
let fs = require('fs')
var serviceAccount = require("./testprojekt-f25bd2bea08f.json");
const admin = require('firebase-admin');
let baseurl = "https://maps.googleapis.com/maps/api/geocode/json?"
let gmKey = "&key=AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU"

// Required for side-effects
require("firebase/firestore");
var config = {
  apiKey: "AIzaSyDVePpFvjZE1yncoErl9otAq3LHrZF4GYk",
  authDomain: "testprojekt-36812.firebaseapp.com",
  databaseURL: "https://testprojekt-36812.firebaseio.com",
  projectId: "testprojekt-36812",
  storageBucket: "testprojekt-36812.appspot.com",
  messagingSenderId: "888866002076",
  credential: admin.credential.cert(serviceAccount)
};
admin.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = admin.firestore();

content = fs.readFileSync('birthplaces_ch.json');
let birthplaces = JSON.parse(content);



let i = 0;

for (let birthplace of birthplaces) {
  let addressstring = encodeURI(`address= ${birthplace.strasse} ${birthplace.plz} ${birthplace.ort}`);
  let url = baseurl + addressstring + gmKey;
  console.log(url);
  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      let lat = body.results[0].geometry.location.lat;
      let lng = body.results[0].geometry.location.lng;
      birthplace.lat = lat;
      birthplace.lng = lng;
      db.collection("birthplaces").add(birthplace)
        .then(function (docRef) {
          console.log(i++);
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    });
  });
}


