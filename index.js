'use strict';

var hasSymbols = require('has-symbols');

/* globals AsyncIterator: false */

var asyncIterProto = typeof AsyncIterator === 'function' ? AsyncIterator.prototype : {};

if (hasSymbols() && Symbol.asyncIterator && !(Symbol.asyncIterator in asyncIterProto)) {
	asyncIterProto[Symbol.asyncIterator] = function () {
		return this;
	};
}

module.exports = asyncIterProto;
