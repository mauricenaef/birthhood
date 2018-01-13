bpUploader = require('./firebase_uploader_birthplaces.js').BirthplaceUploader;
exUploader = require('./firebase_uploader_birthexperiences.js').ExperienceUploader;
serviceAccount = require("./birthhood-0bd55101ecab.json");
serviceAccount_backup = require("./birthhood2-d5eb892b23d2.json");
birthplacesFilePath = 'birthplaces.json'
experiencesFilePath = 'birthexperience_data.json'
admin = require('firebase-admin');
require('firebase/firestore');

config_prod = {
    apiKey: "AIzaSyBo-NplVsfsCeD_m_kZ_6Y8BzNnVKTHbIo",
    authDomain: "birthhood.firebaseapp.com",
    databaseURL: "https://birthhood.firebaseio.com",
    projectId: "birthhood",
    storageBucket: "birthhood.appspot.com",
    messagingSenderId: "986661546141",
    credential: admin.credential.cert(serviceAccount)
};

config_dev = {
    apiKey: "AIzaSyCpXT0NeCCpYWeL2vITlDbYmQ6HGekgDqI",
    authDomain: "birthhood2.firebaseapp.com",
    databaseURL: "https://birthhood2.firebaseio.com",
    projectId: "birthhood2",
    storageBucket: "",
    messagingSenderId: "836576784093",

    credential: admin.credential.cert(serviceAccount_backup)
}

admin.initializeApp(config_dev);
var db = admin.firestore();



bp = bpUploader.uploadBirthplaces(db, birthplacesFilePath);
bp.then(() => exUploader.uploadExperiences(db, experiencesFilePath));
/*
    .catch(error => console.log("error during Upload: ", error));*/
