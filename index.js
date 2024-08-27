'use strict';

var hasSymbols = require('has-symbols');
var GetIntrinsic = require('get-intrinsic');

/* globals AsyncIterator: false */

var asyncIterProto = typeof AsyncIterator === 'function' ? AsyncIterator.prototype : GetIntrinsic('%AsyncIteratorPrototype%', true) || {};

if (hasSymbols() && Symbol.asyncIterator && !(Symbol.asyncIterator in asyncIterProto)) {
	asyncIterProto[Symbol.asyncIterator] = function () {
		return this;
	};
}

module.exports = asyncIterProto;
