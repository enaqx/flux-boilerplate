var Promise = require('es6-promise').Promise;
var merge = require('react/lib/merge');

var _callbacks = [];
var _promises = [];

var Dispatcher = function() {};
Dispatcher.prototype = merge(Dispatcher.prototype, {

  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1; 
  },

  dispatch: function(payload) {
    var resolves = [];
    var rejects = [];
    _promises = _callbacks.map(function(_, i) {
      return new Promise(function(resolve, reject) {
        resolves[i] = resolve;
        rejects[i] = reject;
      });
    });

    _callbacks.forEach(function(callback, i) {
      Promise.resolve(callback(payload)).then(function() {
        resolves[i](payload);
      }, function() {
        rejects[i](new Error('Dispatcher callback unsuccessful'));
      });
    });
    _promises = [];
  }
});

module.exports = Dispatcher;