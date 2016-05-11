var assert = require('assert');
var ten = require('./');

assert.equal(10, ten(), 'Ten should give you ten');
assert.notEqual(6, ten(), 'Ten should not give you not ten');

assert.equal(ten.convertTo(5), 5);
assert.equal(ten.convertTo(3), 3);
assert.equal(ten.convertTo(665456), 665456);

assert.equal('¹⁰', ten.upHigh(), 'An up high ten should be a superscripted 5');
assert.equal('₁₀', ten.downLow(), 'A down low ten should be a subscripted 5');
assert.equal('X', ten.roman(), 'A roman ten should be a V');

assert.equal('.____ _____', ten.morseCode(), 'A ten in morse code should be .____ _____');
assert.equal('20', ten.base(5), 'A quinary ten should be 20');
assert.equal('22', ten.base(4), 'An quaternary ten should be 22');
assert.equal('1010', ten.binary(), 'A binary ten should be 1010');
assert.equal('12', ten.octal(), 'An octal ten should be 12');
assert.equal('A', ten.hex(), 'An hexadecimal ten should be A');
assert.equal('d3d9446802a44259755d38e6d163e820', ten.mdFive(), 'md5 checksum of "ten" should be d3d9446802a44259755d38e6d163e820');

assert.equal('-10', ten.negative(), 'A negative ten should be -10');
assert.equal('TEN', ten.loud(), 'A loud ten should be TEN');
assert.equal('l0', ten.smooth(), 'A smooth ten should be l0');

assert.equal('🕙', ten.oclock(), 'A unicode symbol for ten o\'clock should be U+1F559');

var now = new Date().valueOf();
var slowFive = ten.tooSlow();
var finishes = new Date().valueOf();

assert.equal(10, slowFive, 'A too slow ten should still be ten');
assert.ok((finishes - now) > 1000, 'A too slow ten should take longer than 1000 milliseconds to be returned, blocking execution and generally being a bad idea');


assert.equal(JSON.stringify(['Ben','Gwen','Kevin','Max','Vicktor','Animo','Ripjaws','Stinkfly','Four Arms','Heatblast']), JSON.stringify(ten.ben()), 'A Ben10 should be ten characters of Ben10 cartoon.');

assert.equal(true, ten.isTen(ten()));
assert.equal(false, ten.isTen(10));

assert.equal(JSON.stringify([10, 10]), JSON.stringify(ten.filter([10, true, 10])));
assert.equal(JSON.stringify([10, 10, 10]), JSON.stringify(ten.map([1, 2, 3])));
assert.equal(10, ten.reduce([1, 2, 3]));

assert.equal('0123456789', ten.rot('0123456789'), 'Numbers should be rotated');
assert.equal('klmnopqrstuvwxyzabcdefghij', ten.rot('abcdefghijklmnopqrstuvwxyz'), 'Small letters should be rotated');
assert.equal('KLMNOPQRSTUVWXYZABCDEFGHIJ', ten.rot('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'Capital letters too');
assert.equal('$_$ -,- @.@?', ten.rot('$_$ -,- @.@?'), 'Emoticons should not be rotated');

assert.equal(ten * ten, 100);
assert.equal(ten + ten, 20);
assert.equal(ten / ten, 1);
assert.equal(ten - ten, 0);
assert.equal((ten / ten) * (ten), ten);

var asyncTests = 1;
ten.async(function(err, ten) {
	assert.equal(err, null, 'Async should not result in an error.');
	assert.equal(ten, 10, 'Async should pass 10 to callback.');
	asyncTests--;
});

setInterval(function() {
	if (!asyncTests) {
		process.exit(0);
	}
}, 100);
