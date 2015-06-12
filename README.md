##### Tiny Uncluttered Boilerplate using original Flux

###### Batteries included:
* [React](http://facebook.github.io/react/) for UI components library
* [Flux](http://facebook.github.io/flux/) for UI application architecture
* [Jest](http://facebook.github.io/jest/) for UI Unit testing
* [Webpack](http://webpack.github.io/) for UIbundling
* [Sass](http://sass-lang.com/) for UI styling
* [Node](https://nodejs.org/) for backend platform

###### Manual steps:
* Clone this repository `$ git clone https://github.com/enaqx/flux-boilerplate`
* Change directory to your new shiny boilerplate `$ cd flux-boilerplate`
* Remove git folder `$ rm -rf git`
* Install Node dependencies `$ npm install`
* Build your new shiny project for the first time `$ npm run build`
* Start Web-server `$ npm start`
* Update README.md text to show the awesomeness of your new cool shiny project
* Proceed to [http://localhost:8080/app/](http://localhost:8080/app/)

###### Project structure:
 ```
 │
 ├─── .gitignore
 ├─── README.md
 ├─── package.json
 ├─── webpack.config.js
 ├─── app/
 ├─── ├─── index.html
 │    ├─── scss/
 │    ├─── image/
 │    ├─── js/
 │    │    ├─── actions/
 │    │    ├─── components/
 │    │    ├─── constants/
 │    │    ├─── dispatcher/
 │    │    ├─── stores/

 ```
