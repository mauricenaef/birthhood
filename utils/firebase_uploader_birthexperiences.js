/**
 * Created by tobiasbrunner on 02.11.17.
 * Upload Birthexperiences module.
 * Gets Birthplace ID from firestore. Birthplaces therefore have to be uploaded beforehand.
 */

var ExperienceUploader = function () { };

ExperienceUploader.prototype.uploadExperiences = function (db) {
  'use strict';
  let fs = require('fs')
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

exports.ExperienceUploader = new ExperienceUploader();
