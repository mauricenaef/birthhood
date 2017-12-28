bpUploader = require('./firebase_uploader_birthplaces.js').BirthplaceUploader;
exUploader = require('./firebase_uploader_birthexperiences.js').ExperienceUploader;
sCalculator = require('./firebase_uploader_calculateScore.js').ScoreCalculator;
serviceAccount = require("./birthhood-0bd55101ecab.json");
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

admin.initializeApp(config);
var db = admin.firestore();

bpUploader.uploadBirthplaces(db);
exUploader.uploadExperiences(db);
sCalculator.calculateScores(db);