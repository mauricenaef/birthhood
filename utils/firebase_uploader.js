/**
 * Upload Data for Birthhood-CAS-FEE-project 2017
 * 
 * Data is read from the JSON-Files and geocoded using google maps.
 * 
 * Make sure you provide a correct google maps-API-Key.
 * 
 * Config of the firebase-account is also inline. Service-Account-Keys are needed
 * to upload to Firebase.
 */


//Firebase Service Accounts
serviceAccount = require("./birthhood-0bd55101ecab.json");
serviceAccount_backup = require("./birthhood2-d5eb892b23d2.json");

//JSON with Birthplace-Information
birthplacesFilePath = 'birthplaces.json'

//JSON with exisiting Experiences
experiencesFilePath = 'birthexperience_data.json'

admin = require('firebase-admin');
require('firebase/firestore');

//Configuration for Production environment
config_prod = {
    apiKey: "AIzaSyBo-NplVsfsCeD_m_kZ_6Y8BzNnVKTHbIo",
    authDomain: "birthhood.firebaseapp.com",
    databaseURL: "https://birthhood.firebaseio.com",
    projectId: "birthhood",
    storageBucket: "birthhood.appspot.com",
    messagingSenderId: "986661546141",
    credential: admin.credential.cert(serviceAccount)
};

//Configuration for Development environment
config_dev = {
    apiKey: "AIzaSyCpXT0NeCCpYWeL2vITlDbYmQ6HGekgDqI",
    authDomain: "birthhood2.firebaseapp.com",
    databaseURL: "https://birthhood2.firebaseio.com",
    projectId: "birthhood2",
    storageBucket: "",
    messagingSenderId: "836576784093",
    credential: admin.credential.cert(serviceAccount_backup)
}

bpUploader = require('./firebase_uploader_birthplaces.js').BirthplaceUploader;
exUploader = require('./firebase_uploader_birthexperiences.js').ExperienceUploader;

admin.initializeApp(config_prod);
var db = admin.firestore();

bpUploader.uploadBirthplaces(db, birthplacesFilePath)
    .then(() => exUploader.uploadExperiences(db, experiencesFilePath))
    .catch(error => console.log("error during Upload: ", error));
