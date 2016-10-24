(function(global) {
  // ENV
  global.ENV = global.ENV || 'development';

  // Tell System loader where to find stuff
  var map = {
    'app': 'src/tmp/app'
  };

  // Tell System loader how to load when no filename and/or no extension
  var packages = {
    'app': {
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    }
  };

  // NPM packages
  var npmPackages = [
    '@angular',
    'rxjs',
    'lodash'
  ];

  // Package entries that expose barrels using index.js
  var packageNames = [
    'app/shared',
    'lodash'
  ];

  // Angular package entries
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
  ];

  npmPackages.forEach(function (pkgName) {
    map[pkgName] = 'node_modules/' + pkgName;
  });

  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  ngPackageNames.forEach(function(pkgName) {
    map['@angular/' + pkgName] = 'node_modules/@angular/' + pkgName + '/bundles/' + pkgName + '.umd.js';
  });

  var config = {
    map: map,
    packages: packages
  };

  if (global.filterSystemConfig) {
    global.filterSystemConfig(config);
  }
  System.config(config);

})(this);
