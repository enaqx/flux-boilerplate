##### Tiny Uncluttered Boilerplate using original Flux

###### Batteries included:
* [React](http://facebook.github.io/react/) for UI components library
* [Flux](http://facebook.github.io/flux/) for UI application architecture
* [Jest](http://facebook.github.io/jest/) for UI Unit testing
* [Webpack](http://webpack.github.io/) for UIbundling
* [Sass](http://sass-lang.com/) for UI styling
* [Node](https://nodejs.org/) for backend platform

###### Manual steps for the glory of your new project:
* Clone this repository `$ git clone https://github.com/enaqx/flux-boilerplate`
* Change directory to your new shiny boilerplate `$ cd flux-boilerplate`
* Remove git folder `$ rm -rf .git`
* Init your git repository `$ git init`
* Install Node dependencies `$ npm install`
* Build your new shiny project for the first time `$ npm run build`
* Check development web-server `$ npm start`
* Test if everything is OK to start work `$ npm test`
* Proceed to [http://localhost:8080/app/](http://localhost:8080/app/)
* Update `package.json` to match your desires
* Update `README.md` text to show the awesomeness of your new cool shiny project
* Simplest step: add components, actions, stores, style it sexually
* Run in production: `$ npm run production`
* ...
* Profit!


###### Project structure:
 ```
 │
 ├─── .gitignore
 ├─── README.md
 ├─── package.json
 ├─── server.js
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
