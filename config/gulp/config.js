var envConfig = require('./utils/env');

module.exports = function () {
  var root = '';
  var src = root + 'src/';
  var config = root + 'config/';
  var app = src + 'app/';
  var tmp = src + 'tmp/';
  var tmpApp = tmp + 'app/';
  var assets = src + 'assets/';
  var assetsPath = {
    styles: assets + 'styles/',
    images: assets + 'images/',
    fonts: assets + 'fonts/'
  };
  var index = src + 'index.html';
  var tsFiles = [
    app + '**/!(*.spec)+(.ts)'
  ];
  var build = {
    path: 'dist/',
    app: 'dist/app/',
    fonts: 'dist/fonts',
    assetPath: 'dist/assets/',
    assets: {
      lib: {
        js: 'lib.js',
        css: 'lib.css'
      }
    }
  };

  var systemJs = {
    builder: {
      normalize: true,
      minify: true,
      mangle: true,
      runtime: false,
      globalDefs: {
        DEBUG: false,
        ENV: 'production'
      }
    }
  };

  var gulpConfig = {
    root: root,
    config: config,
    src: src,
    app: app,
    tmp: tmp,
    tmpApp: tmpApp,
    assets: assets,
    index: index,
    build: build,
    assetsPath: assetsPath,
    tsFiles: tsFiles,
    systemJs: systemJs
  };

  if (envConfig.ENV === envConfig.ENVS.DEV) {
    var historyApiFallback = require('connect-history-api-fallback');
    var browserSync = {
      dev: {
        port: 3000,
        server: {
          baseDir: './src/',
          middleware: [historyApiFallback()],
          routes: {
            "/node_modules": "node_modules",
            "/src": "src"
          }
        },
        files: [
          src + "index.html",
          src + "systemjs.conf.js",
          assetsPath.styles + "main.css",
          tmpApp + "**/*.js",
          app + "**/*.css",
          app + "**/*.html"
        ]
      },
      prod: {
        port: 3001,
        server: {
          baseDir: './' + build.path,
          middleware: [historyApiFallback()]
        }
      }
    };
    gulpConfig.browserSync = browserSync;
  }
  return gulpConfig;
};
