/**
 * Created by tobiasbrunner on 02.11.17.
 * 
 * calculate scores.
 * 
 * TODO: 
 * read external JSON file.
 * 
 * Start from npm
 * 
 * 
 * 
 */

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

var db = firebase.firestore();
var birthplaces = db.collection('birthplaces');

var birthplaces_sync = []; //local birthplaces with ids

var items = birthplaces.where('NAME', '>=', '');

items.get().then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
    const data = doc.data();
    data.id = doc.id;
    birthplaces_sync.push(data);
  });
  getScores();
})
  .catch(function (error) {
    console.log("Error getting documents: ", error);
  });

//get Experiences for all birthplaces
function getScores() {
  for (let birthplace of birthplaces_sync) {

    let scores = {};
    scores.b = [];
    scores.g = [];
    scores.i = [];
    scores.u = [];
    scores.w = [];

    var experiences = db.collection('birthexperiences').where('birthplace_id', '==', birthplace.id);
    experiences.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        thisexperience = doc.data();
        for (var property in thisexperience) {
          if (thisexperience.hasOwnProperty(property)) {
            if ("bgiuw".indexOf(property.charAt(0)) >= 0 && property.length < 4) {
              scores[property.charAt(0)].push(thisexperience[property])
            }
          }
        }
      })
      score = calculateScores(scores);
      var docRef = db.collection('birthplaces').doc(birthplace.id);

      docRef.update(score).then(function () {
        console.log("Document successfully updated!");
      })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
    });
  }
}

//calculate scores based on a collection of arrays
function calculateScores(scores) {
  let returnscores = { b: 0, g: 0, i: 0, u: 0, w: 0 }
  for (var property in returnscores) {
    cleanArray = scores[property].filter(x => x != '' && x != "-");
    returnscores[property] = cleanArray.length > 0 ? cleanArray.reduce((a, b) => a + b) / cleanArray.length : null;
  }
  return returnscores;
}