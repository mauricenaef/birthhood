/**
 * Created by tobiasbrunner on 02.11.17.
 * Upload Birthplaces module. Currently JSON Objects are stored in the js file
 */
var BirthplaceUploader = function (db) { };

BirthplaceUploader.prototype.uploadBirthplaces = function (db) {
  return new Promise(
    function (resolve, reject) {
      'use strict';

      const https = require("https");
      let fs = require('fs')
      let baseurl = "https://maps.googleapis.com/maps/api/geocode/json?"
      //let gmKey = "&key=AIzaSyDPFOtfpOWNYJOpKO0bU4etLEJ6ipqvqKY"
      let gmKey = "&key=AIzaSyCjUUWddqTNe8uUCYuOJvf44TKWJQ43z8E" //yvonne
      let content = fs.readFileSync('birthplaces_ch.json');
      let birthplaces = JSON.parse(content);

      let i = 0;

      for (let birthplace of birthplaces) {
        let addressstring = encodeURI(`address= ${birthplace.strasse} ${birthplace.plz} ${birthplace.ort}`);
        let url = baseurl + addressstring + gmKey;

        https.get(url, res => {
          res.setEncoding("utf8");
          let body = "";

          res.on("data", data => {
            body += data;
          });

          res.on("end", () => {
            body = JSON.parse(body);
            console.log(body);
            let lat = body.results[0].geometry.location.lat;
            let lng = body.results[0].geometry.location.lng;

            birthplace.lat = lat;
            birthplace.lng = lng;
            db.collection("birthplaces").add(birthplace)
              .then(function (docRef) {
                console.log(i++);
                console.log("Birthplace written with ID: ", docRef.id);
              })
              .catch(function (error) {
                console.error("Error adding document: ", error);
              });
          });
        });

      }
      resolve("Upload finished");
    })
};


exports.BirthplaceUploader = new BirthplaceUploader();




