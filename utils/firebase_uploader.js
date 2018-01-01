bpUploader = require('./firebase_uploader_birthplaces.js').BirthplaceUploader;
exUploader = require('./firebase_uploader_birthexperiences.js').ExperienceUploader;
sCalculator = require('./firebase_uploader_calculateScore.js').ScoreCalculator;
serviceAccount = require("./birthhood-0bd55101ecab.json");
serviceAccount2 = require("./testprojekt-be3fb0557c36.json");
serviceAccount3 = require("./birthhood2-d5eb892b23d2.json");
admin = require('firebase-admin');
require('firebase/firestore');

config = {
    apiKey: "AIzaSyBo-NplVsfsCeD_m_kZ_6Y8BzNnVKTHbIo",
    authDomain: "birthhood.firebaseapp.com",
    databaseURL: "https://birthhood.firebaseio.com",
    projectId: "birthhood",
    storageBucket: "birthhood.appspot.com",
    messagingSenderId: "986661546141",
    credential: admin.credential.cert(serviceAccount)
};

config2 = {
    apiKey: "AIzaSyCpXT0NeCCpYWeL2vITlDbYmQ6HGekgDqI",
    authDomain: "birthhood2.firebaseapp.com",
    databaseURL: "https://birthhood2.firebaseio.com",
    projectId: "birthhood2",
    storageBucket: "",
    messagingSenderId: "836576784093",

    credential: admin.credential.cert(serviceAccount3)
}

admin.initializeApp(config2);
var db = admin.firestore();


/*exUploader.uploadExperiences(db).then(
   
)*/


//bpUploader.uploadBirthplaces(db);
//exUploader.uploadExperiences(db)
sCalculator.calculateScores(db)
/*.then(
    exUploader.uploadExperiences(db).then(
        sCalculator.calculateScores(db)
    ))*/
    //.catch(error => console.log("hobbla", error));
