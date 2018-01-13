/**
 * Created by tobiasbrunner on 02.11.17.
 * Upload Birthplaces module. Currently JSON Objects are stored in the js file
 */
var BirthplaceUploader = function () { };

BirthplaceUploader.prototype.uploadBirthplaces = function (db, birthplacesFilePath) {
  return new Promise(
    function (resolve, reject) {
      'use strict';

      const https = require("https");
      let fs = require('fs')
      let baseurl = "https://maps.googleapis.com/maps/api/geocode/json?"
      let gmKey = "&key=AIzaSyDPFOtfpOWNYJOpKO0bU4etLEJ6ipqvqKY"
      /* Backup Key */
      //let gmKey = "&key=AIzaSyCjUUWddqTNe8uUCYuOJvf44TKWJQ43z8E"
      let content = fs.readFileSync(birthplacesFilePath);
      let birthplaces = JSON.parse(content);

      let i = 0;

      for (let birthplace of birthplaces) {
        i++
        (function (db) {
          setTimeout(function () {
            let addressstring = encodeURI(`address= ${birthplace.strasse} ${birthplace.plz} ${birthplace.ort}`);
            let url = baseurl + addressstring + gmKey;

            https.get(url, res => {
              i++;
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
                    console.log("Birthplace written with ID: ", docRef.id);
                  })
                  .catch(function (error) {
                    console.error("Error adding document: ", error);
                  });
              });
            });
            (i == birthplaces.length) && resolve("Upload finished");
          }, i * 500);
        })(db);
      }
      
    })
};


exports.BirthplaceUploader = new BirthplaceUploader();




