'use strict';
require('../../modules/es.object.to-string');
require('../../modules/es.array.iterator');
require('../../modules/es.string.iterator');
require('../../modules/es.weak-map.constructor');
require('../../modules/esnext.weak-map.from');
require('../../modules/esnext.weak-map.emplace');
require('../../modules/web.dom-collections.iterator');
var path = require('../../internals/path');

module.exports = path.WeakMap.from;
