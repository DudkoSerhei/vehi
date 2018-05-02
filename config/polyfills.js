if (typeof Promise === 'undefined') {
  require('promise/lib/rejection-tracking').enable(); // eslint-disable-line global-require
  window.Promise = require('promise/lib/es6-extensions.js'); // eslint-disable-line global-require
}

require('whatwg-fetch'); // eslint-disable-line global-require

Object.assign = require('object-assign'); // eslint-disable-line global-require

if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global); // eslint-disable-line global-require
}
