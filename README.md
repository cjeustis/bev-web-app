# MyPotum

### Included in the package
* [npm](https://www.npmjs.com/) - Package Manager
* [TypeScript](http://www.typescriptlang.org/) - Language
  * with [Typings](https://github.com/typings/typings) - Typescript Definitions
* [Gulp](http://gulpjs.com/) - Building/Automation
* [Browsersync](https://www.browsersync.io/) - Development Server and Live Reload
* [SystemJS](https://github.com/systemjs/systemjs) - Module Loader
* [Codelyzer](https://github.com/mgechev/codelyzer) - Static Code Analyzer
* [SystemJS Builder](https://github.com/systemjs/builder) or [Webpack](https://webpack.github.io/) - Production Module Bundling


## Prerequisites
[Node.js](https://nodejs.org/en/)
[Global Gulp CLI](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Installation
Clone the repository
Go to the root directory and install all the packages:
```bash
npm install
```

## Development Build and Live Reload Server
```bash
npm start
```

## Production Build and Live Reload Server
Production build:
```bash
npm run build
```
Production build and serve using Browsersync:
```bash
npm run serve-build
```