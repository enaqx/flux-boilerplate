flux-boileplate
===


Tools:
 * React as UI components library
 * Flux as UI application architecture
 * Jest for Unit testing
 * Webpack for bundling
 * Gulp as build system
 * Express as web-server
 * MongoDB/Mongoose as data storage
 * Istanbul as code coverage tool

Usage:
 * Install node.js and mongodb
 * Clone project
  `$ git clone https://github.com/enaqx/flux-boilerplate`
 * Install locally required npm modules
  `$ npm install`
 * Build project
  `$ npm run build`
 * Run Unit Tests and coverage
  `$ npm test`
 * Start project
  `$ npm start`


 Boilerplate structure:
 |
 + lib            // Server-side functionality
 + src            // Web-application source files
  |
  + css           // Cascading Style Sheets files
  + image         // Pictures folder
  + js            // Client-side functionality
   |
   + actions      // Semantic dispatcher API
   + components   // React components
   + constants    // Application Constants
   + dispatcher   // Data flow management
   + stores       // Client-side application state and logic
   + app.js       // Main Web-application file
  + index.html    // Default page
 + .gitignore     // Specifies intentionally untracked files to ignore by git
 + README.md      // Essential project info
 + package.json   // Packaging format for node.js applications
 + server.js      // Web-server


Boileplates examples:
 * [react-boilerplate](https://github.com/petehunt/react-boilerplate)
 * [ReactHack](https://github.com/petehunt/ReactHack)
 * [koa-react-full-example](https://github.com/dozoisch/koa-react-full-example)
 * [hackathon-starter](https://github.com/sahat/hackathon-starter)