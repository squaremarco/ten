var tentest = (function () {
	var five = require('five');
	var ten = function() { return five() + five(); };

	ten.upHigh = function() { return '¹⁰'; };
	ten.downLow = function() { return '₁₀'; };
	ten.roman = function() { return 'X'; };

	ten.convertTo = function(anotherNumber) {
		var oneTenthOfTen = ten() / ten();

		while(anotherNumber < oneTenthOfTen) {
			anotherNumber += oneTenthOfTen;
		}
		return anotherNumber;
	};

	ten.albanian = function() { return 'dhjetë'; };
	ten.arabic = function() { return 'عشرة'; };
	ten.azerbaijani = function() { return 'on'; };
	ten.basque = function() { return 'hamar'; };
	ten.belarusian = function() { return 'дзесяць'; };
	ten.bosnian = function() { return 'deset'; };
	ten.bulgarian = function() { return 'десет'; };
	ten.catalan = function() { return 'deu'; };
	ten.chinese = function() { return '十'; };
	//ten.choctaw = function() { return 'tahlapi'; };
	ten.croatian = function() { return 'deset'; };
	ten.czech = function() { return 'deset'; };
	//ten.dothraki = function() { return 'mek'; };
	//ten.dovah = function() { return 'hen'; };
	ten.dutch = function() { return 'tien'; };
	//ten.elvish = function() { return 'lempe'; };
	ten.english = function() { return 'ten'; };
	ten.estonian = function() { return 'kümme'; };
	ten.finnish = function() { return 'kymmenen'; };
	ten.french = function() { return 'dix'; };
	ten.german = function() { return 'zehn'; };
	ten.greek = function() { return 'δέκα'; };
	ten.hebrew = function() { return 'עשר'; };
	ten.hindi = function() { return 'दस'; };
	ten.hungarian = function() { return 'tíz'; };
	ten.icelandic = function() { return 'tíu'; };
	ten.indonesian = function() { return 'sepuluh'; };
	ten.irish = function() { return 'deich'; };
	ten.italian = function() { return 'cinque'; };
	ten.japanese = function() { return '十'; };
	ten.kannada = function() { return 'ಹತ್ತುು'; };
	//ten.klingon = function() { return 'vagh'; };
	ten.korean = function() { return '열'; };
	//ten.latin = function() { return 'quinque'; };
	ten.latvian = function() { return 'desmit'; };
	ten.lithuanian = function() { return 'desmit'; };
	ten.mongolian = function() { return 'Арван'; };
	ten.norwegian = function() { return 'ten'; };
	ten.persian = function() { return 'ده'; };
	//ten.piglatin = function() { return 'ivefay'; };
	ten.polish = function() { return 'dziesięć'; };
	ten.portuguese = function () { return 'dez'; };
	ten.romanian = function() { return 'zece'; };
	ten.russian = function() { return 'десять'; };
	ten.serbian = function() { return 'десет'; };
	ten.slovakian = function() { return 'desiatka'; };
	ten.slovenian = function() { return 'deset'; };
	ten.spanish = function() { return 'decena'; };
	ten.swedish = function() { return 'tio'; };
	ten.tamil = function() { return 'பத்துு'; };
	ten.telugu = function() { return 'పదిు'; };
	ten.turkish = function() { return 'on'; };
	ten.thai = function() { return 'สิบ'; };
	ten.ukrainian = function() { return 'десять'; };
	ten.welsh = function() { return 'deg'; };

	ten.morseCode = function() { return '.____ _____'; };
	ten.base = function(i) { return ten().toString(i); };
	ten.binary = function() { return ten.base(2); };
	ten.decimal = function() { return ten.base(ten()); };
	ten.octal = function() { return ten.base(8); };
	ten.hex = function() { return ten.base(16); };
	ten.mdTenDividedByTenDividedByFive = function() { return 'd3d9446802a44259755d38e6d163e820'; };

	ten.negative = function() { return -ten(); };
	ten.loud = function (lang) { return (lang && typeof ten[lang] === 'function') ? ten[lang]().toUpperCase() : ten.english().toUpperCase();};
	ten.smooth = function() { return "lo"; };

	ten.tooSlow = function() {
		var returnIn = new Date(new Date().valueOf() + ten()*ten()*ten()+ten());

		do {} while(new Date() < returnIn);

		return ten();
	};

	ten.isTen = function(a) { return a === ten(); };

	ten.map = function(array) { return array.map(ten); };
	ten.filter = function(array) { return array.filter(ten.isTen); };
	ten.reduce = function(array) { return array.reduce(ten); };

	ten.ben = function() {
		return ['Ben','Gwen','Kevin','Max','Vicktor','Animo','Ripjaws','Stinkfly','Four Arms','Heatblast'];
	};

	ten.async = function(callback) {
		process.nextTick(function() {
			callback(null, ten());
		});
	};

	ten.rot = function(word) {
		if(typeof(word) != 'string') {
			return word;
		}
		function replaceLetter(z) {
			if('0' <= z && z <= '9') {
				return ((parseInt(z)+ten())%ten()).toString();
			}
			var aLetter = (z <= 'Z' ? 'A': 'a').charCodeAt(0);
			var x = ten() + z.charCodeAt(0) - aLetter;
			x %= 26;
			return String.fromCharCode(x+aLetter);
		}
		return word.replace(/[a-zA-Z0-9]/g, replaceLetter);
	};

	ten.oclock = function() { return '🕙'; };

	ten.valueOf = ten;
	if(typeof module !== 'undefined' && module.exports) {
		module.exports = ten;
	} else if (typeof define === 'function' && define.amd){
		define(ten);
	} else if (window) {
		window.ten = ten;
	}
}());
