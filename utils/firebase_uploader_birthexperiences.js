/**
 * Created by tobiasbrunner on 02.11.17.
 * Upload Birthexperiences module.
 * Gets Birthplace ID from firestore. Birthplaces therefore have to be uploaded beforehand.
 */

var ExperienceUploader = function () { };

ExperienceUploader.prototype.uploadExperiences = function (db, experiencesFilePath) {
  return new Promise(
    function (resolve, reject) {
      'use strict';
      let fs = require('fs')
      let content = fs.readFileSync(experiencesFilePath);
      let birthexperiences = JSON.parse(content);

      var birthplaces = db.collection('birthplaces');
      for (let birthexperience of birthexperiences) {
        var item = birthplaces.where('name', '==', birthexperience["birthplace"]);
        item.get().then(function (querySnapshot) {
          if (querySnapshot.empty) {
            console.log("Nicht gefunden: ", birthexperience["birthplace"]);
          }
          querySnapshot.forEach(function (doc) {
            birthexperience["birthplace_id"] = doc.id;
            //delete birthexperience["birth_place"];
            uploadExerience(birthexperience)
          });
        }).catch(function (error) {
          console.log("Error getting Birthplace: ", error);
        });
      }

      let i = 0;
      function uploadExerience(experience) {
        db.collection("birthexperiences").add(experience)
          .then(function (docRef) {
            console.log(i);
            i++;
            if (i == birthexperiences.length) {
              console.log("last document written");
              resolve("yess");
            }
            console.log("Experience written with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding Experience: ", error);
          });
      }
      resolve("yess");
    })
};
exports.ExperienceUploader = new ExperienceUploader();
