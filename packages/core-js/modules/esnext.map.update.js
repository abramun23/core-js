'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var aCallable = require('../internals/a-callable');

var TypeError = global.TypeError;

// `Set.prototype.update` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  update: function update(key, callback /* , thunk */) {
    var map = anObject(this);
    var length = arguments.length;
    aCallable(callback);
    var isPresentInMap = map.has(key);
    if (!isPresentInMap && length < 3) {
      throw TypeError('Updating absent value');
    }
    var value = isPresentInMap ? map.get(key) : aCallable(length > 2 ? arguments[2] : undefined)(key, map);
    map.set(key, callback(value, key, map));
    return map;
  }
});
