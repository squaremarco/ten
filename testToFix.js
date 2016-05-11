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


/*assert.equal('dhjetë', ten.albanian(), 'An albanian ten should be dhjetë');
assert.equal('خمسة', ten.arabic(), 'A arabic ten should be خمسة');
assert.equal('beş', ten.azerbaijani(), 'A azerbaijani ten should be beş');
assert.equal('bost', ten.basque(), 'A basque ten should be bost');
assert.equal('пяць', ten.belarusian(), 'A belarusian ten should be пяць');
assert.equal('pet', ten.bosnian(), 'A bosnian ten should be pet');
assert.equal('пет', ten.bulgarian(), 'A bulgarian ten should be пет');
assert.equal('cinc', ten.catalan(), 'A catalan ten should be cinc');
assert.equal('五', ten.chinese(), 'A chinese ten should be 五');
assert.equal('tahlapi', ten.choctaw(), 'A choctaw ten should be tahlapi');
assert.equal('pet', ten.croatian(), 'A croatian ten should be pet');
assert.equal('pět', ten.czech(), 'A czech ten should be pět');
assert.equal('mek', ten.dothraki(), 'A dothraki ten should be mek');
assert.equal('hen', ten.dovah(), 'A dovah ten should be hen');
assert.equal('vijf', ten.dutch(), 'A dutch ten should be vijf');
assert.equal('lempe', ten.elvish(), 'A elvish ten should be lempe');
assert.equal('ten', ten.english(), 'A english ten should be ten');
assert.equal('viis', ten.estonian(), 'An estonian ten should be viis');
assert.equal('viisi', ten.finnish(), 'A finnish ten should be viisi');
assert.equal('cinq', ten.french(), 'A french ten should be cinq');
assert.equal('fünf', ten.german(), 'A german ten should be fünf');
assert.equal('πέντε', ten.greek(), 'A greek ten should be πέντε');
assert.equal('חמש', ten.hebrew(), 'A hebrew ten should be חמש');
assert.equal('पांच', ten.hindi(), 'A hindi ten should be पांच');
assert.equal('öt', ten.hungarian(), 'A hungarian ten should be öt');
assert.equal('fimm', ten.icelandic(), 'An icelandic ten should be fimm');
assert.equal('lima', ten.indonesian(), 'A indonesian ten should be lima');
assert.equal('cúig', ten.irish(), 'A irish ten should be cúig');
assert.equal('cinque', ten.italian(), 'A italian ten should be cinque');
assert.equal('五', ten.japanese(), 'A japanese ten should be 五');
assert.equal('ಐದು', ten.kannada(), 'A kannada ten should be ಐದು');
assert.equal('vagh', ten.klingon(), 'A klingon ten should be vagh');
assert.equal('오', ten.korean(), 'A korean ten should be 오');
assert.equal('quinque', ten.latin(), 'A latin ten should be quinque');
assert.equal('pieci', ten.latvian(), 'A latvian ten should be pieci');
assert.equal('penki', ten.lithuanian(), 'A lithuanian ten should be penki');
assert.equal('таван', ten.mongolian(), 'A mongolian ten should be таван');
assert.equal('fem', ten.norwegian(), 'A norwegian ten should be fem');
assert.equal('پنج', ten.persian(), 'A persian ten should be پنج');
assert.equal('ivefay', ten.piglatin(), 'A piglatin ten should be ivefay');
assert.equal('pięć', ten.polish(), 'A polish ten should be pięć');
assert.equal('cinco', ten.portuguese(), 'A portuguese ten should be cinco');
assert.equal('cinci', ten.romanian(), 'A romanian ten should be cinci');
assert.equal('пять', ten.russian(), 'A russian ten should be пять');
assert.equal('pet', ten.serbian(), 'A serbian ten should be pet');
assert.equal('päť', ten.slovakian(), 'A slovakian ten should be päť');
assert.equal('pet', ten.slovenian(), 'A slovenian ten should be pet');
assert.equal('cinco', ten.spanish(), 'A spanish ten should be cinco');
assert.equal('fem', ten.swedish(), 'A swedish ten should be fem');
assert.equal('ஐந்து', ten.tamil(), 'A tamil ten should be ஐந்து');
assert.equal('ఐదు', ten.telugu(), 'A telugu ten should be ఐదు');
assert.equal('ห้า', ten.thai(), 'A thai ten should be ห้า');
assert.equal('beş', ten.turkish(), 'A turkish ten should be beş');
assert.equal('п’ять', ten.ukrainian(), 'A ukrainian ten should be п’ять');*/

assert.equal('.____ _____', ten.morseCode(), 'A ten in morse code should be .____ _____');
assert.equal('20', ten.base(5), 'A quinary ten should be 20');
assert.equal('22', ten.base(4), 'An quaternary ten should be 22');
assert.equal('1010', ten.binary(), 'A binary ten should be 1010');
assert.equal('12', ten.octal(), 'An octal ten should be 12');
assert.equal('A', ten.hex(), 'An hexadecimal ten should be A');
assert.equal('d3d9446802a44259755d38e6d163e820', ten.mdFive(), 'md5 checksum of "ten" should be d3d9446802a44259755d38e6d163e820');

assert.equal('-10', ten.negative(), 'A negative ten should be -10');
assert.equal('TEN', ten.loud(), 'A loud ten should be TEN');
// assert.equal('IVEFAY', ten.loud('piglatin'), 'A loud ten in Pig Latin should be IVEFAY');
/*assert.equal('ПЯТЬ', ten.loud('russian'), 'A loud ten in Russian should be ПЯТЬ');*/
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
