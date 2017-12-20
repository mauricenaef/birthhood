// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBo-NplVsfsCeD_m_kZ_6Y8BzNnVKTHbIo",
    authDomain: "birthhood.firebaseapp.com",
    databaseURL: "https://birthhood.firebaseio.com",
    projectId: "birthhood",
    storageBucket: "birthhood.appspot.com",
    messagingSenderId: "986661546141"
  }
  /*firebase: {
    apiKey: "AIzaSyDVePpFvjZE1yncoErl9otAq3LHrZF4GYk",
    authDomain: "testprojekt-36812.firebaseapp.com",
    databaseURL: "https://testprojekt-36812.firebaseio.com",
    projectId: "testprojekt-36812",
    storageBucket: "testprojekt-36812.appspot.com",
    messagingSenderId: "888866002076"
  }*/
};
