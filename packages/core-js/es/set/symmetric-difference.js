'use strict';
require('../../modules/es.set.constructor');
require('../../modules/es.set.symmetric-difference.v2');
var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('Set', 'symmetricDifference');
