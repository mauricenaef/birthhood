![birthhood_components](/assets/read-me-header.png)
# *birthhood*

CAS FEE 2017 Projektarbeit 2

*birthhood* is an angular application which allows the pregnant female user to find a suitable birth place for giving birth. The birthplaces are rated by best practice experience guidelines and give an overview around 5 main birth experience criteria (umgebung, …).
 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Clone the master branch to your desired folder. This project requires node and npm installed
```
git clone https://github.com/mauricenaef/birthhood.git
```
### Setting up the backend

*birthhood*s backend is based on google firebase firestore. If you would like to run the application, you need to have a corresponding firebase account and project set up. Make sure to enable *login with email and password* for your firebase project.

To set up the app for your firebase backend, amend the _src/environments/environment*.ts_ file accordingly (firebase project as well as service-key).

To set up your firebase project with the needed firebase functions and security rules, run 
````
firebase deploy
````

To initialize your firebase backend with some sample data, follow these steps:
1. configure your firebase-account and project in *utils/firebase_uploader.js*
2. configure your google-maps key in *utils/firebase_uploader.js*

cd into *utils* and run
```
node firebase_uploader.js
```

### Installing

Make sure you are cd into the main project folder and install npm packages
```
npm install
```

Once done, serve the application
```
cd birthhood-app 
ng serve
```

Your application should now be running under [http://localhost:4200/](http://localhost:4200/birthplaces)

### Configuration

Further configuration of the application can be set in *src/app/config/*

## Features of the app

### All users
* Geolocate user
* Browse birthplaces on the map
* Search birthplace with live search
* Interact with carousel
* View birthplace details

### Logged in users only
* Sign up
* Log in with credentials
* Reset password
* Add new birthexperience
* Delete own birthexperience

### Upcoming features
* Social login
* Add name on sign up
* Edit profile
* Sign up for birthplace owners
* Edit for birthplace owners


## Running unit tests

Unit test done with Karma and Jasmine
```
cd birthhood-app
ng test
```

## User testing

Extensive user testing with the [invision Prototype](https://invis.io/SAF0GILUE) has been done. Pictures are located in the *assets/User Testing Proof Folder*

## Styleguide

The LIVE Styleguide is available under [birthood styleguide](https://styleguide.birthhood.org/index.html) and is created with comment notes in the respective SCSS files. The styleguide follows Atomic Design Rules [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). The styleguide is sectioned into following parts:

* Nuclides (All colors and font rules go here)
* Atoms (Basic building blocks)
* Molecules (Combination of atoms)
* Structures (Combination of molecules)

Styleguide depends on the apps final CSS file to display all designs. To generate and deploy the styleguide from start to end follow these steps:

Create *complete-styles.css*
```
cd birthhood-app
gulp sass    
```

Generate local styleguide in static folder
```
cd birthhood-app
nucleus   
```

Deploy to firebase to subdomain
```
cd static
firebase deploy    
```

## Deployment

For live deployment to firebase and [birthhod.org](https://birthhood.org)

First build the production folder to deploy from with the AOT compilation
```
cd birthhood-app
ng build --aot --prod
```

Then upload files to server
```
cd birthhood-app
firebase deploy --only hosting
```

Alternatively you can serve the AOT build using node.js. To do so, run
````
node server.js
````

## Built With

* [Angular](https://angular.io/) - Angular
* [Angular CLI](https://cli.angular.io/) - Angular CLI
* [Firebase](https://firebase.google.com/) - Firebase Google
* [Google Maps](https://developers.google.com/maps/) - Google Maps API
* [Chart.js](http://www.chartjs.org/) - Chart.js
* [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) - owl.carousel
* [ngx-toaster](https://github.com/scttcper/ngx-toastr) - Toaster
* [Foundation 6](https://foundation.zurb.com/) - Foundation for Sites Flex Grid
* [Gulp](https://gulpjs.com/) - gulp
* [nucleus](https://github.com/holidaypirates/nucleus) - nucleus styleguide


## Additional things

* [Live Site](https://birthhood.org) - Live Site
* [Styleguide](https://styleguide.birthhood.org/index.html) - Live Styleguide
* [Invision Prototype](https://invis.io/SAF0GILUE) - Prototype used to make User Tests

## Authors

* **Marcel Maurice Naef** - *Project Owner* - [mauricenaef](https://github.com/mauricenaef)
* **Tobias Brunner** - *Project Owner* - [t1brunne](https://github.com/t1brunne)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to Andrea Glauser for providing the initial data and inspiration to the project
* Thanks to all the guys at SO for having had the same issues we had 
