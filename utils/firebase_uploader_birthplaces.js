
/**
 * Created by tobiasbrunner on 02.11.17.
 * Upload Birthplaces module. Currently JSON Objects are stored in the js file
 */
var BirthplaceUploader = function () { };

BirthplaceUploader.prototype.uploadBirthplaces = function (db, birthplacesFilePath) {

  'use strict';

  const https = require("https");
  let fs = require('fs');
  let baseurl = "https://maps.googleapis.com/maps/api/geocode/json?";
  let gmKey = "&key=AIzaSyDPFOtfpOWNYJOpKO0bU4etLEJ6ipqvqKY";
  let imgpath = '../birthhood-app/src/assets/images/birthplace/hero_1600/hero_';
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

            if (!fs.existsSync(imgpath + birthplace.short_name + ".jpg")) {
              birthplace.short_name = "default";
            }
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
      }, i * 500);
    })(db);
  }

  return new Promise(
    function (resolve, reject) {
      setTimeout(function () { resolve("Upload finished"); }, (birthplaces.length + 1) * 500);
    })
};


exports.BirthplaceUploader = new BirthplaceUploader();




