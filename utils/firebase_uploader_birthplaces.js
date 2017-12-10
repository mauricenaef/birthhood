/**
 * Created by tobiasbrunner on 02.11.17.
 * 
 * Upload Birthplaces. Currently JSON Objects are stored in the js file
 * 
 * TODO: 
 * read external JSON file.
 * 
 * Start from npm
 * 
 * 
 * 
 */
//https://firebase.google.com/docs/firestore/quickstart
//const admin = require('firebase-admin');
const https = require("https");
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

var birthplaces = [
  {
    "name": "Asana Spital Leuggern",
    "strasse": "Schulweg 3",
    "plz": 5316,
    "ort": "Leuggern",
    "url": "http://www.spitalleuggern.ch/"
  },
  {
    "name": "Bethesda Spital",
    "strasse": "Gellertstrasse 144",
    "plz": 4052,
    "ort": "Basel",
    "url": "https://bethesda-spital.ch"
  },
  {
    "name": "Gesundheitszentrum Fricktal (GZF)",
    "strasse": "Spitalstrasse 10",
    "plz": 5080,
    "ort": "Laufenburg",
    "url": "https://www.gzf.ch"
  },
  {
    "name": "Hirslanden",
    "strasse": "Witellikerstrasse 40",
    "plz": 8032,
    "ort": "Zürich",
    "url": "http://hirslanden.ch"
  },
  {
    "name": "Inselspital",
    "strasse": "Freiburgstrasse 8",
    "plz": 3010,
    "ort": "Bern",
    "url": "https://www.insel.ch"
  },
  {
    "name": "Kantonsspital Aarau (KSA)",
    "strasse": "Tellstrasse 25",
    "plz": 5001,
    "ort": "Aarau",
    "url": "https://www.ksa.ch"
  },
  {
    "name": "Kantonsspital Baden",
    "strasse": "Im Ergel 1",
    "plz": 5404,
    "ort": "Baden",
    "url": "www.kantonsspitalbaden.ch/"
  },
  {
    "name": "Kantonsspital Baselland",
    "strasse": "Rheinstrasse 26",
    "plz": 4410,
    "ort": "Liestal",
    "url": "https://www.ksbl.ch"
  },
  {
    "name": "Kantonsspital Frauenfeld (STGAG)",
    "strasse": "Pfaffenholzstrasse 4",
    "plz": 8501,
    "ort": "Frauenfeld",
    "url": "http://www.stgag.ch/"
  },
  {
    "name": "Kantonsspital Glarus",
    "strasse": "Burgstrasse 99",
    "plz": 8750,
    "ort": "Glarus",
    "url": "www.ksgl.ch"
  },
  {
    "name": "Kantonsspital Graubünden",
    "strasse": "Loestrasse 170",
    "plz": 7000,
    "ort": "Chur",
    "url": "https://www.ksgr.ch/"
  },
  {
    "name": "Kantonsspital Luzern (LUKS)|",
    "strasse": "Spitalstrasse 34",
    "plz": 6000,
    "ort": "Luzern",
    "url": "https://www.luks.ch"
  },
  {
    "name": "Kantonsspital Münsterlingen (STGAG)",
    "strasse": "Spitalcampus 1",
    "plz": 8596,
    "ort": "Münsterlingen",
    "url": "www.stgag.ch"
  },
  {
    "name": "Kantonsspital Nidwalden",
    "strasse": "Ennetmooserstrasse 19",
    "plz": 6370,
    "ort": "Stans",
    "url": "www.ksnw.ch"
  },
  {
    "name": "Kantonsspital Obwalden",
    "strasse": "Brünigstrasse 181",
    "plz": 6060,
    "ort": "Sarnen",
    "url": "https://www.ksow.ch"
  },
  {
    "name": "Kantonsspital Olten (soH)",
    "strasse": "Baslerstrasse 150",
    "plz": 4600,
    "ort": "Olten",
    "url": "https://www.so-h.ch/kantonsspital-olten"
  },
  {
    "name": "Kantonsspital St. Gallen",
    "strasse": "Rorschacher Str. 95",
    "plz": 9007,
    "ort": "St. Gallen",
    "url": "https://www.kssg.ch/"
  },
  {
    "name": "Kantonsspital Uri",
    "strasse": "Spitalstrasse 1",
    "plz": 6460,
    "ort": "Altdorf",
    "url": "https://www.ksuri.ch"
  },
  {
    "name": "Kantonsspital Winterthur (KSW)",
    "strasse": "Brauerstrasse 15",
    "plz": 8401,
    "ort": "Winterthur",
    "url": "https://www.ksw.ch"
  },
  {
    "name": "Kantonsspital Zug (ZGKS)|",
    "strasse": "Landhausstrasse 11",
    "plz": 6340,
    "ort": "Baar",
    "url": "https://www.zgks.ch"
  },
  {
    "name": "Klinik Bethanien",
    "strasse": "Toblerstrasse 51",
    "plz": 8044,
    "ort": "Zürich",
    "url": "https://www.klinikbethanien.ch"
  },
  {
    "name": "Paracelsus Spital",
    "strasse": "Bergstrasse 16",
    "plz": 8805,
    "ort": "Richterswil",
    "url": "https://paracelsus-spital.com"
  },
  {
    "name": "See-Spital",
    "strasse": "Asylstrasse 19",
    "plz": 8810,
    "ort": "Horgen",
    "url": "www.see-spital.ch"
  },
  {
    "name": "Spital Bülach",
    "strasse": "Spitalstrasse 24",
    "plz": 8180,
    "ort": "Bülach",
    "url": "https://www.spitalbuelach.ch/"
  },
  {
    "name": "Spital Davos",
    "strasse": "Promenade 4",
    "plz": 7270,
    "ort": "Davos Platz",
    "url": "www.spitaldavos.ch"
  },
  {
    "name": "Spital Emmental",
    "strasse": "Oberburgstrasse 54",
    "plz": 3400,
    "ort": "Burgdorf",
    "url": "www.spital-emmental.ch"
  },
  {
    "name": "Spital Fürstenland Toggenburg (SRFT)",
    "strasse": "Fürstenlandstrasse 32",
    "plz": 9500,
    "ort": "Wil",
    "url": "https://www.srft.ch"
  },
  {
    "name": "Spital Grabs",
    "strasse": "Spitalstrasse 44",
    "plz": 9472,
    "ort": "Grabs",
    "url": "www.spitalgrabs.ch"
  },
  {
    "name": "Spital Heiden",
    "strasse": "Werdstrasse 1A",
    "plz": 9410,
    "ort": "Heiden",
    "url": "www.spitalverbund.ch"
  },
  {
    "name": "Spital Herisau",
    "strasse": "Spitalstrasse 6",
    "plz": 9100,
    "ort": "Herisau",
    "url": "www.spitalverbund.ch"
  },
  {
    "name": "Spital Interlaken (fmi)",
    "strasse": "Weissenaustrasse 27",
    "plz": 3800,
    "ort": "Unterseen",
    "url": "https://www.spitalfmi.ch"
  },
  {
    "name": "Spital Frutigen (fmi)",
    "strasse": "Adelbodenstrasse 27",
    "plz": 3714,
    "ort": "Frutigen",
    "url": "www.spitalfmi.ch"
  },
  {
    "name": "Spital Lachen",
    "strasse": "Oberdorfstrasse 41",
    "plz": 8853,
    "ort": "Lachen",
    "url": "https://www.spital-lachen.ch"
  },
  {
    "name": "Spital Limmattal",
    "strasse": "Urdorferstrasse 100",
    "plz": 8952,
    "ort": "Schlieren",
    "url": "https://www.spital-limmattal.ch"
  },
  {
    "name": "Spital Linth",
    "strasse": "Gasterstrasse 25",
    "plz": 8730,
    "ort": "Uznach",
    "url": "www.spital-linth.ch"
  },
  {
    "name": "Spital Männedorf",
    "strasse": "Asylstrasse 10",
    "plz": 8708,
    "ort": "Männedorf",
    "url": "www.spitalmaennedorf.ch"
  },
  {
    "name": "Spital Münsingen",
    "strasse": "Krankenhausweg",
    "plz": 3110,
    "ort": "Münsingen",
    "url": "https://www.spitalmuensingen.ch"
  },
  {
    "name": "Spital Muri",
    "strasse": "Spitalstrasse 144",
    "plz": 5630,
    "ort": "Muri",
    "url": "www.spital-muri.ch"
  },
  {
    "name": "Spital Oberengadin",
    "strasse": "Via Nouva 3",
    "plz": 7503,
    "ort": "Samaden",
    "url": "www.spital-oberengadin.ch"
  },
  {
    "name": "Spital Region Oberaargau (SRO)",
    "strasse": "St. Urbanstrasse 67",
    "plz": 4900,
    "ort": "Langenthal",
    "url": "www.sro.ch"
  },
  {
    "name": "Spital regiunal Surselva",
    "strasse": "Spitalstrasse 6",
    "plz": 7130,
    "ort": "Ilanz",
    "url": "https://www.spitalilanz.ch"
  },
  {
    "name": "Spital Schwyz",
    "strasse": "Waldeggstrasse 10",
    "plz": 6430,
    "ort": "Schwyz",
    "url": "www.spital-schwyz.ch"
  },
  {
    "name": "Spital Thun (STS)",
    "strasse": "Krankenhausstrasse 12",
    "plz": 3600,
    "ort": "Thun",
    "url": "www.spitalstsag.ch"
  },
  {
    "name": "Spital Thusis",
    "strasse": "Alte Str. 31",
    "plz": 7430,
    "ort": "Thusis",
    "url": "www.spitalthusis.ch"
  },
  {
    "name": "Spital Uster",
    "strasse": "Brunnenstrasse 42",
    "plz": 8610,
    "ort": "Uster",
    "url": "https://www.spitaluster.ch"
  },
  {
    "name": "Spital Walenstadt",
    "strasse": "Spitalstrasse 5",
    "plz": 8880,
    "ort": "Walenstadt",
    "url": "https://www.srrws.ch"
  },
  {
    "name": "Spital Wallis",
    "strasse": "Pflanzettastrasse 8",
    "plz": 3930,
    "ort": "Visp",
    "url": "http://www.hopitalduvalais.ch/"
  },
  {
    "name": "Spital Wetzikon (GZO)",
    "strasse": "Spitalstrasse 66",
    "plz": 8620,
    "ort": "Wetzikon",
    "url": "https://www.gzo.ch"
  },
  {
    "name": "Spital Zollikerberg",
    "strasse": "Trichtenhauser Str. 20",
    "plz": 8125,
    "ort": "Zollikerberg",
    "url": "https://www.spitalzollikerberg.ch"
  },
  {
    "name": "Spitalzentrum Biel",
    "strasse": "Vogelsang 84",
    "plz": 2501,
    "ort": "Biel",
    "url": "https://www.spitalzentrum-biel.ch"
  },
  {
    "name": "Stadtspital Triemli",
    "strasse": "Birmensdorferstrasse 497",
    "plz": 8063,
    "ort": "Zürich",
    "url": "https://www.stadt-zuerich.ch/triemli"
  },
  {
    "name": "Universitätsspital Basel",
    "strasse": "Spitalstrasse 21",
    "plz": 4031,
    "ort": "Basel",
    "url": "http://www.unispital-basel.ch/"
  },
  {
    "name": "Universitätsspital Zürich (USZ)",
    "strasse": "Frauenklinikstrasse 10",
    "plz": 8006,
    "ort": "Zürich",
    "url": "https://www.geburtshilfe.usz.ch/"
  },
  {
    "name": "Kantonsspital Freiburg",
    "strasse": "Chemin des Pensionnats 2",
    "plz": 1708,
    "ort": "Fribourg",
    "url": "http://www.fr.ch/"
  },
  {
    "name": "Universitätsspital Genf",
    "strasse": "Rue Gabrielle-Perret-Gentil 4",
    "plz": 1205,
    "ort": "Genève",
    "url": "https://www.hug-ge.ch/"
  },
  {
    "name": "Geburtshaus Delphys",
    "strasse": "Badenerstrasse 177",
    "plz": 8003,
    "ort": "Zürich",
    "url": "http://www.delphys.ch"
  },
  {
    "name": "Geburtshaus Zürcher Oberland AG",
    "strasse": "Schürlistrasse 3",
    "plz": 8344,
    "ort": "Bäretswil",
    "url": "http://www.geburtshaus-zho.ch"
  },
  {
    "name": "Geburtshaus Schaffhausen",
    "strasse": "Beckengässchen 11",
    "plz": 8200,
    "ort": "Schaffhausen",
    "url": "http://www.geburtshaus-sh.ch"
  },
  {
    "name": "Philina GmbH",
    "strasse": "Hinderbergstrasse 14",
    "plz": 9473,
    "ort": "Gams",
    "url": "https://www.philina.ch/"
  },
  {
    "name": "Geburtshus Storchenäscht",
    "strasse": "Hendschikerstrasse 12",
    "plz": 5504,
    "ort": "Othmarsingen",
    "url": "http://www.storchenaescht.ch"
  },
  {
    "name": "Geburtshaus Maternité Alpine",
    "strasse": "Eggetlistrasse 5a",
    "plz": 3770,
    "ort": "Zweisimmen",
    "url": "https://www.maternitealpine.ch"
  },
  {
    "name": "Geburtshaus Ita Wegman",
    "strasse": "Pfeffingerweg 1",
    "plz": 4144,
    "ort": "Arlesheim",
    "url": "https://www.maternitealpine.ch"
  },
  {
    "name": "Geburtshaus Ambra",
    "strasse": "Unterdorfstrasse 25",
    "plz": 4443,
    "ort": "Wittinsburg",
    "url": "http://www.gebaeren.ch"
  },
  {
    "name": "Geburtshaus Tagmond",
    "strasse": "Hauptstrasse 26",
    "plz": 4133,
    "ort": "Pratteln",
    "url": "http://www.tagmond.ch"
  },
  {
    "name": "Geburtshaus Basel GmbH Basel",
    "strasse": "Schweizergasse 8",
    "plz": 4054,
    "ort": "Basel",
    "url": "http://www.geburtshausbasel.ch"
  },
  {
    "name": "Maison de naissance Le Petit Prince",
    "strasse": "Route du Petit Moncor 1d",
    "plz": 1752,
    "ort": "Villars-sur-Glâne",
    "url": "http://www.le-petit-prince.ch"
  },
  {
    "name": "Maison de Naissance Dix Lunes",
    "strasse": "Presinge 45",
    "plz": 1241,
    "ort": "Puplinge",
    "url": "http://www.maisondenaissancelaroseraie.ch"
  },
  {
    "name": "Maison de naissance Les Cigognes",
    "strasse": "Route Principale 21",
    "plz": 2824,
    "ort": "Vicques",
    "url": "http://www.les-cigognes.ch"
  },
  {
    "name": "Geburtshaus Terra Alta",
    "strasse": "Schellenrain 20",
    "plz": 6208,
    "ort": "Oberkirch",
    "url": "http://www.geburtshaus-terra-alta.ch"
  },
  {
    "name": "Maison de naissance Tilia",
    "strasse": "Valangines 9",
    "plz": 2000,
    "ort": "Neuchâtel",
    "url": "http://www.tilia-naissance.ch"
  },
  {
    "name": "Geburtshaus & HebammenpraxisGeburtshaus Stans GmbH",
    "strasse": "Rosenweg 3",
    "plz": 6371,
    "ort": "Stans",
    "url": "http://www.geburtshaus-stans.ch"
  },
  {
    "name": "Casa Maternità e Nascita Lediecilune",
    "strasse": "Via Guglielmo Canevascini 4",
    "plz": 6900,
    "ort": "Lugano",
    "url": "http://www.lediecilune.ch"
  },
  {
    "name": "Maison de naissance La Grange Rouge",
    "strasse": "Rue du Village 5",
    "plz": 1274,
    "ort": "Grens",
    "url": "http://www.lagrangerouge.ch"
  },
  {
    "name": "Maison de naissance Zoé",
    "strasse": "Poyet 9",
    "plz": 1510,
    "ort": "Moudon",
    "url": "http://www.naissance-zoe.ch"
  },
  {
    "name": "Maison de naissance Aquila",
    "strasse": "Ch. du Grand Chêne",
    "plz": 1860,
    "ort": "Aigle",
    "url": "http://www.aquila-naissance.ch"
  },
  {
    "name": "Maison de naissance Lunaissance",
    "strasse": "ch de la Lune 3",
    "plz": 1132,
    "ort": "Lullly s/ Morges",
    "url": "http://www.lunaissance.ch/"
  },
  {
    "name": "Maison de naissance Gaïa",
    "strasse": "Av. Grand Champsec 80",
    "plz": 1950,
    "ort": "Sion",
    "url": "http://www.gaïa.ch"
  }
]



let i = 0;
let baseurl = "https://maps.googleapis.com/maps/api/geocode/json?"
let gmKey = "&key=AIzaSyDnyvyYQD2Kf70Qkxbmk0Q6RFBw-FKCJbU"
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
      let lat = body.results[0].geometry.location.lat;
      let lng = body.results[0].geometry.location.lng;
      birthplace.lat = lat;
      birthplace.lng = lng;
      db.collection("birthplaces").add(birthplace)
        .then(function (docRef) {
          console.log(i++);
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    });
  });
}

