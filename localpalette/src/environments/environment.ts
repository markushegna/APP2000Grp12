// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Fiksa firestore databasen i prosjektet.
// Steg 1. Lagde databasen i firebase console
// Steg 2. installerte 'npm install firebase @angular/fire' pakka for å lage ein
// kobling mellom angular prosjektet og databasen

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDgVWjLCXYFJ2MF6qD101hqXZRAlkXFR5w",
    authDomain: "localpalette-1890c.firebaseapp.com",
    projectId: "localpalette-1890c",
    storageBucket: "localpalette-1890c.appspot.com",
    messagingSenderId: "569320311979",
    appId: "1:569320311979:web:216b315c8b9128e77fbbee",
    measurementId: "G-HCH7V2JLBM"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
