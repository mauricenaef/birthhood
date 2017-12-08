/**
 * Created by tobiasbrunner on 02.11.17.
 */
//https://firebase.google.com/docs/firestore/quickstart
//const admin = require('firebase-admin');

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var config = {
    apiKey: "AIzaSyBo-NplVsfsCeD_m_kZ_6Y8BzNnVKTHbIo",
    authDomain: "birthhood.firebaseapp.com",
    databaseURL: "https://birthhood.firebaseio.com",
    projectId: "birthhood",
    storageBucket: "birthhood.appspot.com",
    messagingSenderId: "986661546141"
  };
firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

var birthplaces = [{
    "NAME": "Asana Spital Leuggern",
    "STRASSE": "Schulweg 3",
    "PLZ": 5316,
    "ORT": "Leuggern",
    "URL": "http://www.spitalleuggern.ch/"
  },
  {
    "NAME": "Bethesda Spital",
    "STRASSE": "Gellertstrasse 144",
    "PLZ": 4052,
    "ORT": "Basel",
    "URL": "https://bethesda-spital.ch"
  },
  {
    "NAME": "Gesundheitszentrum Fricktal (GZF)",
    "STRASSE": "Spitalstrasse 10",
    "PLZ": 5080,
    "ORT": "Laufenburg",
    "URL": "https://www.gzf.ch"
  },
  {
    "NAME": "Hirslanden",
    "STRASSE": "Witellikerstrasse 40",
    "PLZ": 8032,
    "ORT": "Z�rich",
    "URL": "http://hirslanden.ch"
  },
  {
    "NAME": "Inselspital",
    "STRASSE": "Freiburgstrasse 8",
    "PLZ": 3010,
    "ORT": "Bern",
    "URL": "https://www.insel.ch"
  },
  {
    "NAME": "Kantonsspital Aarau (KSA)",
    "STRASSE": "Tellstrasse 25",
    "PLZ": 5001,
    "ORT": "Aarau",
    "URL": "https://www.ksa.ch"
  },
  {
    "NAME": "Kantonsspital Baden",
    "STRASSE": "Im Ergel 1",
    "PLZ": 5404,
    "ORT": "Baden",
    "URL": "www.kantonsspitalbaden.ch/"
  },
  {
    "NAME": "Kantonsspital Baselland",
    "STRASSE": "Rheinstrasse 26",
    "PLZ": 4410,
    "ORT": "Liestal",
    "URL": "https://www.ksbl.ch"
  },
  {
    "NAME": "Kantonsspital Frauenfeld (STGAG)",
    "STRASSE": "Pfaffenholzstrasse 4",
    "PLZ": 8501,
    "ORT": "Frauenfeld",
    "URL": "http://www.stgag.ch/"
  },
  {
    "NAME": "Kantonsspital Glarus",
    "STRASSE": "Burgstrasse 99",
    "PLZ": 8750,
    "ORT": "Glarus",
    "URL": "www.ksgl.ch"
  },
  {
    "NAME": "Kantonsspital Graub�nden",
    "STRASSE": "Loestrasse 170",
    "PLZ": 7000,
    "ORT": "Chur",
    "URL": "https://www.ksgr.ch/"
  },
  {
    "NAME": "Kantonsspital Luzern (LUKS)|",
    "STRASSE": "Spitalstrasse 34",
    "PLZ": 6000,
    "ORT": "Luzern",
    "URL": "https://www.luks.ch"
  },
  {
    "NAME": "Kantonsspital M�nsterlingen (STGAG)",
    "STRASSE": "Spitalcampus 1",
    "PLZ": 8596,
    "ORT": "M�nsterlingen",
    "URL": "www.stgag.ch"
  },
  {
    "NAME": "Kantonsspital Nidwalden",
    "STRASSE": "Ennetmooserstrasse 19",
    "PLZ": 6370,
    "ORT": "Stans",
    "URL": "www.ksnw.ch"
  },
  {
    "NAME": "Kantonsspital Obwalden",
    "STRASSE": "Br�nigstrasse 181",
    "PLZ": 6060,
    "ORT": "Sarnen",
    "URL": "https://www.ksow.ch"
  },
  {
    "NAME": "Kantonsspital Olten (soH)",
    "STRASSE": "Baslerstrasse 150",
    "PLZ": 4600,
    "ORT": "Olten",
    "URL": "https://www.so-h.ch/kantonsspital-olten"
  },
  {
    "NAME": "Kantonsspital St. Gallen",
    "STRASSE": "Rorschacher Str. 95",
    "PLZ": 9007,
    "ORT": "St. Gallen",
    "URL": "https://www.kssg.ch/"
  },
  {
    "NAME": "Kantonsspital Uri",
    "STRASSE": "Spitalstrasse 1",
    "PLZ": 6460,
    "ORT": "Altdorf",
    "URL": "https://www.ksuri.ch"
  },
  {
    "NAME": "Kantonsspital Winterthur (KSW)",
    "STRASSE": "Brauerstrasse 15",
    "PLZ": 8401,
    "ORT": "Winterthur",
    "URL": "https://www.ksw.ch"
  },
  {
    "NAME": "Kantonsspital Zug (ZGKS)|",
    "STRASSE": "Landhausstrasse 11",
    "PLZ": 6340,
    "ORT": "Baar",
    "URL": "https://www.zgks.ch"
  },
  {
    "NAME": "Klinik Bethanien",
    "STRASSE": "Toblerstrasse 51",
    "PLZ": 8044,
    "ORT": "Z�rich",
    "URL": "https://www.klinikbethanien.ch"
  },
  {
    "NAME": "Paracelsus Spital",
    "STRASSE": "Bergstrasse 16",
    "PLZ": 8805,
    "ORT": "Richterswil",
    "URL": "https://paracelsus-spital.com"
  },
  {
    "NAME": "See-Spital",
    "STRASSE": "Asylstrasse 19",
    "PLZ": 8810,
    "ORT": "Horgen",
    "URL": "www.see-spital.ch"
  },
  {
    "NAME": "Spital B�lach",
    "STRASSE": "Spitalstrasse 24",
    "PLZ": 8180,
    "ORT": "B�lach",
    "URL": "https://www.spitalbuelach.ch/"
  },
  {
    "NAME": "Spital Davos",
    "STRASSE": "Promenade 4",
    "PLZ": 7270,
    "ORT": "Davos Platz",
    "URL": "www.spitaldavos.ch"
  },
  {
    "NAME": "Spital Emmental",
    "STRASSE": "Oberburgstrasse 54",
    "PLZ": 3400,
    "ORT": "Burgdorf",
    "URL": "www.spital-emmental.ch"
  },
  {
    "NAME": "Spital F�rstenland Toggenburg (SRFT)",
    "STRASSE": "F�rstenlandstrasse 32",
    "PLZ": 9500,
    "ORT": "Wil",
    "URL": "https://www.srft.ch"
  },
  {
    "NAME": "Spital Grabs",
    "STRASSE": "Spitalstrasse 44",
    "PLZ": 9472,
    "ORT": "Grabs",
    "URL": "www.spitalgrabs.ch"
  },
  {
    "NAME": "Spital Heiden",
    "STRASSE": "Werdstrasse 1A",
    "PLZ": 9410,
    "ORT": "Heiden",
    "URL": "www.spitalverbund.ch"
  },
  {
    "NAME": "Spital Herisau",
    "STRASSE": "Spitalstrasse 6",
    "PLZ": 9100,
    "ORT": "Herisau",
    "URL": "www.spitalverbund.ch"
  },
  {
    "NAME": "Spital Interlaken (fmi)",
    "STRASSE": "Weissenaustrasse 27",
    "PLZ": 3800,
    "ORT": "Unterseen",
    "URL": "https://www.spitalfmi.ch"
  },
  {
    "NAME": "Spital Frutigen (fmi)",
    "STRASSE": "Adelbodenstrasse 27",
    "PLZ": 3714,
    "ORT": "Frutigen",
    "URL": "www.spitalfmi.ch"
  },
  {
    "NAME": "Spital Lachen",
    "STRASSE": "Oberdorfstrasse 41",
    "PLZ": 8853,
    "ORT": "Lachen",
    "URL": "https://www.spital-lachen.ch"
  },
  {
    "NAME": "Spital Limmattal",
    "STRASSE": "Urdorferstrasse 100",
    "PLZ": 8952,
    "ORT": "Schlieren",
    "URL": "https://www.spital-limmattal.ch"
  },
  {
    "NAME": "Spital Linth",
    "STRASSE": "Gasterstrasse 25",
    "PLZ": 8730,
    "ORT": "Uznach",
    "URL": "www.spital-linth.ch"
  },
  {
    "NAME": "Spital M�nnedorf",
    "STRASSE": "Asylstrasse 10",
    "PLZ": 8708,
    "ORT": "M�nnedorf",
    "URL": "www.spitalmaennedorf.ch"
  },
  {
    "NAME": "Spital M�nsingen",
    "STRASSE": "Krankenhausweg",
    "PLZ": 3110,
    "ORT": "M�nsingen",
    "URL": "https://www.spitalmuensingen.ch"
  },
  {
    "NAME": "Spital Muri",
    "STRASSE": "Spitalstrasse 144",
    "PLZ": 5630,
    "ORT": "Muri",
    "URL": "www.spital-muri.ch"
  },
  {
    "NAME": "Spital Oberengadin",
    "STRASSE": "Via Nouva 3",
    "PLZ": 7503,
    "ORT": "Samaden",
    "URL": "www.spital-oberengadin.ch"
  },
  {
    "NAME": "Spital Region Oberaargau (SRO)",
    "STRASSE": "St. Urbanstrasse 67",
    "PLZ": 4900,
    "ORT": "Langenthal",
    "URL": "www.sro.ch"
  },
  {
    "NAME": "Spital regiunal Surselva",
    "STRASSE": "Spitalstrasse 6",
    "PLZ": 7130,
    "ORT": "Ilanz",
    "URL": "https://www.spitalilanz.ch"
  },
  {
    "NAME": "Spital Schwyz",
    "STRASSE": "Waldeggstrasse 10",
    "PLZ": 6430,
    "ORT": "Schwyz",
    "URL": "www.spital-schwyz.ch"
  },
  {
    "NAME": "Spital Thun (STS)",
    "STRASSE": "Krankenhausstrasse 12",
    "PLZ": 3600,
    "ORT": "Thun",
    "URL": "www.spitalstsag.ch"
  },
  {
    "NAME": "Spital Thusis",
    "STRASSE": "Alte Str. 31",
    "PLZ": 7430,
    "ORT": "Thusis",
    "URL": "www.spitalthusis.ch"
  },
  {
    "NAME": "Spital Uster",
    "STRASSE": "Brunnenstrasse 42",
    "PLZ": 8610,
    "ORT": "Uster",
    "URL": "https://www.spitaluster.ch"
  },
  {
    "NAME": "Spital Walenstadt",
    "STRASSE": "Spitalstrasse 5",
    "PLZ": 8880,
    "ORT": "Walenstadt",
    "URL": "https://www.srrws.ch"
  },
  {
    "NAME": "Spital Wallis",
    "STRASSE": "Pflanzettastrasse 8",
    "PLZ": 3930,
    "ORT": "Visp",
    "URL": "http://www.hopitalduvalais.ch/"
  },
  {
    "NAME": "Spital Wetzikon (GZO)",
    "STRASSE": "Spitalstrasse 66",
    "PLZ": 8620,
    "ORT": "Wetzikon",
    "URL": "https://www.gzo.ch"
  },
  {
    "NAME": "Spital Zollikerberg",
    "STRASSE": "Trichtenhauser Str. 20",
    "PLZ": 8125,
    "ORT": "Zollikerberg",
    "URL": "https://www.spitalzollikerberg.ch"
  },
  {
    "NAME": "Spitalzentrum Biel",
    "STRASSE": "Vogelsang 84",
    "PLZ": 2501,
    "ORT": "Biel",
    "URL": "https://www.spitalzentrum-biel.ch"
  },
  {
    "NAME": "Stadtspital Triemli",
    "STRASSE": "Birmensdorferstrasse 497",
    "PLZ": 8063,
    "ORT": "Z�rich",
    "URL": "https://www.stadt-zuerich.ch/triemli"
  },
  {
    "NAME": "Universit�tsspital Basel",
    "STRASSE": "Spitalstrasse 21",
    "PLZ": 4031,
    "ORT": "Basel",
    "URL": "http://www.unispital-basel.ch/"
  },
  {
    "NAME": "Universit�tsspital Z�rich (USZ)",
    "STRASSE": "Frauenklinikstrasse 10",
    "PLZ": 8006,
    "ORT": "Z�rich",
    "URL": "https://www.geburtshilfe.usz.ch/"
  },
  {
    "NAME": "Kantonsspital Freiburg",
    "STRASSE": "Chemin des Pensionnats 2",
    "PLZ": 1708,
    "ORT": "Fribourg",
    "URL": "http://www.fr.ch/"
  },
  {
    "NAME": "Universit�tsspital Genf",
    "STRASSE": "Rue Gabrielle-Perret-Gentil 4",
    "PLZ": 1205,
    "ORT": "Gen�ve",
    "URL": "https://www.hug-ge.ch/"
  },
  {
    "NAME": "Geburtshaus Delphys",
    "STRASSE": "Badenerstrasse 177",
    "PLZ": 8003,
    "ORT": "Z�rich",
    "URL": "http://www.delphys.ch"
  },
  {
    "NAME": "Geburtshaus Z�rcher Oberland AG",
    "STRASSE": "Sch�rlistrasse 3",
    "PLZ": 8344,
    "ORT": "B�retswil",
    "URL": "http://www.geburtshaus-zho.ch"
  },
  {
    "NAME": "Geburtshaus Schaffhausen",
    "STRASSE": "Beckeng�sschen 11",
    "PLZ": 8200,
    "ORT": "Schaffhausen",
    "URL": "http://www.geburtshaus-sh.ch"
  },
  {
    "NAME": "Philina GmbH",
    "STRASSE": "Hinderbergstrasse 14",
    "PLZ": 9473,
    "ORT": "Gams",
    "URL": "https://www.philina.ch/"
  },
  {
    "NAME": "Geburtshus Storchen�scht",
    "STRASSE": "Hendschikerstrasse 12",
    "PLZ": 5504,
    "ORT": "Othmarsingen",
    "URL": "http://www.storchenaescht.ch"
  },
  {
    "NAME": "Geburtshaus Maternit� Alpine",
    "STRASSE": "Eggetlistrasse 5a",
    "PLZ": 3770,
    "ORT": "Zweisimmen",
    "URL": "https://www.maternitealpine.ch"
  },
  {
    "NAME": "Geburtshaus Ita Wegman",
    "STRASSE": "Pfeffingerweg 1",
    "PLZ": 4144,
    "ORT": "Arlesheim",
    "URL": "https://www.maternitealpine.ch"
  },
  {
    "NAME": "Geburtshaus Ambra",
    "STRASSE": "Unterdorfstrasse 25",
    "PLZ": 4443,
    "ORT": "Wittinsburg",
    "URL": "http://www.gebaeren.ch"
  },
  {
    "NAME": "Geburtshaus Tagmond",
    "STRASSE": "Hauptstrasse 26",
    "PLZ": 4133,
    "ORT": "Pratteln",
    "URL": "http://www.tagmond.ch"
  },
  {
    "NAME": "Geburtshaus Basel GmbH Basel",
    "STRASSE": "Schweizergasse 8",
    "PLZ": 4054,
    "ORT": "Basel",
    "URL": "http://www.geburtshausbasel.ch"
  },
  {
    "NAME": "Maison de naissance Le Petit Prince",
    "STRASSE": "Route du Petit Moncor 1d",
    "PLZ": 1752,
    "ORT": "Villars-sur-Gl�ne",
    "URL": "http://www.le-petit-prince.ch"
  },
  {
    "NAME": "Maison de Naissance Dix Lunes",
    "STRASSE": "Presinge 45",
    "PLZ": 1241,
    "ORT": "Puplinge",
    "URL": "http://www.maisondenaissancelaroseraie.ch"
  },
  {
    "NAME": "Maison de naissance�Les Cigognes",
    "STRASSE": "Route Principale 21",
    "PLZ": 2824,
    "ORT": "Vicques",
    "URL": "http://www.les-cigognes.ch"
  },
  {
    "NAME": "Geburtshaus Terra Alta",
    "STRASSE": "Schellenrain 20",
    "PLZ": 6208,
    "ORT": "Oberkirch",
    "URL": "http://www.geburtshaus-terra-alta.ch"
  },
  {
    "NAME": "Maison de naissance Tilia",
    "STRASSE": "Valangines 9",
    "PLZ": 2000,
    "ORT": "Neuch�tel",
    "URL": "http://www.tilia-naissance.ch"
  },
  {
    "NAME": "Geburtshaus & HebammenpraxisGeburtshaus Stans GmbH",
    "STRASSE": "Rosenweg 3",
    "PLZ": 6371,
    "ORT": "Stans",
    "URL": "http://www.geburtshaus-stans.ch"
  },
  {
    "NAME": "Casa Maternit� e Nascita Lediecilune",
    "STRASSE": "Via Guglielmo Canevascini 4",
    "PLZ": 6900,
    "ORT": "Lugano",
    "URL": "http://www.lediecilune.ch"
  },
  {
    "NAME": "Maison de naissance La Grange Rouge",
    "STRASSE": "Rue du Village 5",
    "PLZ": 1274,
    "ORT": "Grens",
    "URL": "http://www.lagrangerouge.ch"
  },
  {
    "NAME": "Maison de naissance Zo�",
    "STRASSE": "Poyet 9",
    "PLZ": 1510,
    "ORT": "Moudon",
    "URL": "http://www.naissance-zoe.ch"
  },
  {
    "NAME": "Maison de naissance Aquila",
    "STRASSE": "Ch. du Grand Ch�ne",
    "PLZ": 1860,
    "ORT": "Aigle",
    "URL": "http://www.aquila-naissance.ch"
  },
  {
    "NAME": "Maison de naissance Lunaissance",
    "STRASSE": "ch de la Lune 3",
    "PLZ": 1132,
    "ORT": "Lullly s/ Morges",
    "URL": "http://www.lunaissance.ch/"
  },
  {
    "NAME": "Maison de naissance�Ga�a",
    "STRASSE": "Av. Grand Champsec 80",
    "PLZ": 1950,
    "ORT": "Sion",
    "URL": "http://www.ga�a.ch"
  }]

  let i = 0;
 for (birthplace of birthplaces) {
     
     //console.log(birthplace);
 
  db.collection("birthplaces").add(birthplace)
.then(function(docRef) {
    console.log(i);
    i++;
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
 }

/*
var serviceAccount = require("./importProjekt-478aba9ff144.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
});*/