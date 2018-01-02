const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const admin = require('firebase-admin');



admin.initializeApp(functions.config().firebase);

let scorenames = ["u", "e", "k", "m", "w"];


function calculateScores(scores) {
  let returnscores = {};

  for (let scorename of scorenames) {

    let cleanArray = scores[scorename].filter(x => x != '' && x != "-");
    returnscores["score_" + scorename] = cleanArray.length > 0 ? cleanArray.reduce((a, b) => a + b) / cleanArray.length : null;
  }
  return returnscores;
}

exports.createExperience = functions.firestore
  .document('birthexperiences/{documentId}')
  .onCreate((event) => {


    let scores = {};
    scorenames.forEach((scorename) => {
      scores[scorename] = [];
    });

    let db = admin.firestore();
    let birthplaceid = event.data.get('birthplace_id');
    let experiences = db.collection('birthexperiences').where('birthplace_id', '==', birthplaceid);


    experiences.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let thisexperience = doc.data();
        for (var property in thisexperience) {
          if (thisexperience.hasOwnProperty(property)) {
            if (scorenames.includes(property.charAt(0)) && property.length < 4) {
              scores[property.charAt(0)].push(thisexperience[property])
            }
          }
        }
      })


      let score = calculateScores(scores);
      score["experiences"] = querySnapshot.size;
      var docRef = db.collection('birthplaces').doc(birthplaceid);

      docRef.update(score).then(function () {
        console.info("Document successfully updated!");
      })
        .catch(function (error) {
          console.info("Error updating document: ", error);
        });
    });
    return true;

  });