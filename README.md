![birthhood_components](/assets/read-me-header.png)
# birthhood

CAS FEE 2017 Projektarbeit 2

birthhood is an angular application which allows the pregnant female user to find a suitable birth place for giving birth. The birthplaces are rated by best practice experience guidelines and give an overview around 5 main birth experience criteria (umgebung, …). Birthplaces can be searched and 
 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Clone the master branch to your desired folder. This project requires node and npm installed
```
git clone https://github.com/mauricenaef/birthhood.git
```

### Installing

Make sure you are cd into the main project folder and install npm packages
```
npm install
```

Once done, serve the Application
```
cd birthhood-app 
ng serve
```

your Application should now be running under [http://localhost:4200/](http://localhost:4200/birthplaces)
To build the Application (AOT) use:
```
cd birthhood-app
ng build --aot --prod
```

For Live Deployment to firebase and [birthhod.org](https://birthhood.org)
````
cd birthhood-app
firebase deploy --only hosting
````

## Features of the App

### All Users
* Geolocate user
* Browse Birthplaces on the map
* Search Birthplace with live search
* Interact with Carousel
* View Birthplace details

### Logged in Users only
* SignUp
* LogIn with credentials
* Reset Password
* Add new Birthexperience
* Delete own Birthexperience

### Upcoming features
* Social Login
* Add Name on sign up
* Edit Profile
* Sign up for birthplace owners
* Edit for birthplace owners


## Running Unit Test

Unit Test done with Karma and Jasmine
```
cd birthhood-app
ng test
```

## UserTest

Extensive User Test with the [invision Prototype](https://invis.io/SAF0GILUE) have been made. Pictures are located in the  assets/User Testing Proof Folder

## StyleGuide

The LIVE Styleguide is available under [birthood styleguide](https://styleguide.birthhood.org/index.html) and is created with comment notes in the respective SCSS files. The Styleguide follows Atomic Design Rules [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). Styleguide is sectioned into following parts:

* Nuclides (All Collors and Font Rules go here)
* Atoms (Basic building blocks)
* Molecules (Combination of Atoms)
* Structures (Combination of Molecules)

Styleguide depends on the Apps Final CSS file to display all designs. To generate and Deploy the Styleguide from start to end follow these steps:

Create complete-styles.css
```
cd birthhood-app
gulp sass    
```

Generate local Style guide in static folder
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

For Live Deployment to firebase and [birthhod.org](https://birthhood.org)

First build the production Folder to deploy from with the AOT Combilation
```
cd birthhood-app
ng build --aot --prod
```

Then upload files to server
```
cd birthhood-app
firebase deploy --only hosting
```

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


## Additional Things

* [Live Site](https://birthhood.org) - Live Site
* [Styleguide](https://styleguide.birthhood.org/index.html) - Live Styleguide
* [Invision Prototype](https://invis.io/SAF0GILUE) - Prototype used to make User Tests

## Authors

* **Marcel Maurice Naef** - *Project Owner* - [mauricenaef](https://github.com/mauricenaef)
* **Tobias Brunner** - *Project Owner* - [t1brunne](https://github.com/t1brunne)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to Andrea Glauser for providing the initial data and Inspiration to the Project
* Thanks to all the guys at SO for having had the same issues we had 
