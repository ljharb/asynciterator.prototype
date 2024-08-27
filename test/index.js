'use strict';

var test = require('tape');
var hasSymbols = require('has-symbols')();

var asyncIterProto = require('../');

test('AsyncIterator.prototype', function (t) {
	t.ok(asyncIterProto, 'is truthy');
	t.equal(typeof asyncIterProto, 'object', 'is an object');

	t.test('Symbol.asyncIterator', { skip: !hasSymbols || !Symbol.asyncIterator }, function (st) {
		var fn = asyncIterProto[Symbol.asyncIterator];

		st.equal(typeof fn, 'function', 'Symbol.asyncIterator is a function');

		var sentinel = {};
		st.equal(
			fn.call(sentinel),
			sentinel,
			'Symbol.asyncIterator returns receiver'
		);

		st.end();
	});

	t.end();
});
