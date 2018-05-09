# Classpip Administration Dashboard

[![Classpip Badge](https://img.shields.io/badge/classpip-dashboard-brightgreen.svg)](https://github.com/classpip/classpip-dashboard)
[![Build Status](https://travis-ci.org/classpip/classpip-dashboard.svg?branch=master)](https://travis-ci.org/classpip/classpip-dashboard)
[![Docker Stars](https://img.shields.io/docker/stars/classpip/classpip-dashboard.svg?maxAge=2592000)](https://hub.docker.com/r/classpip/classpip-dashboard/)
[![Docker Pulls](https://img.shields.io/docker/pulls/classpip/classpip-dashboard.svg?maxAge=2592000)](https://hub.docker.com/r/classpip/classpip-dashboard/)
[![Docker Automated buil](https://img.shields.io/docker/automated/classpip/classpip-dashboard.svg?maxAge=2592000)](https://hub.docker.com/r/classpip/classpip-dashboard/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c0bc305863284f0a8478cbd963615f44)](https://www.codacy.com/app/classpip/classpip-dashboard?utm_source=github.com&utm_medium=referral&utm_content=classpip/classpip-dashboard&utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/classpip/classpip-dashboard/badge.svg?branch=master)](https://coveralls.io/github/classpip/classpip-dashboard?branch=master)

[![classpip-icon](https://github.com/classpip/classpip/raw/master/resources/icontext-land.png)](http://www.classpip.com/)

[Classpip](https://www.classpip.com) is a Mobile application for School Gamification. The application is builded around a stack of services and websites to provide a full experience in order to gamificate any educational environment.

This repository contains the [main dashboard panel administration](http://admin.classpip.com) for the classpip project. With this admin panel you could manage all the classpip opertations and data for the website. The project is created using [angular CLI](https://github.com/angular/angular-cli) and some operations are related to this client.

## Global dependencies

Make sure you have NodeJS installed. Download the installer [here](https://nodejs.org/dist/latest-v5.x/) or use your favorite package manager. It's best to get the 5x version of node along with the 3x version of npm. This offers the best in stability and speed for building.

## Local dependencies

All the project dependencies are manage through [npmjs](https://www.npmjs.com/). This command will also download the typings configured in the **typings.json** file. To install this dependencies you should run:

```
npm install
```

## Development server

This project comes with a web server for development purposes. To run this server and use the live reloading feature you cloud run:

```
npm run start
```

Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.

## Build

In case you want to build you application and prepare it for production, you could run the following command. This will generate the production artifacts in the **/dist** folder. In case you want a production build you could run the command with the **- prod** flag.

```
npm run build:prod
```

## Running unit tests

If you want to execute the unit tests via [Karma](https://karma-runner.github.io) you could run:

```
npm test
```

## Further help

To get more help on the **angular-cli** use `npm run ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

Classpip is released under the [Apache2 License](https://github.com/classpip/classpip-mobile/blob/master/LICENSE).
