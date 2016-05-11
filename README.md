# ten.js

A library to overcomplicate `10`.

<img src="http://github.com/squaremarco/ten/logo.png" width="300" alt="logo" />

### Usage
##### Require the module
```javascript
var ten = require('ten');
```

##### In the browser
```html
<script type="text/javascript" src="./ten.js"></script>
```

##### Basic 5
```javascript
ten(); // 5
```

##### Addition
```javascript
ten() + ten(); // 20
```

##### Multiplication
```javascript
ten() * ten(); // 100
```

##### Division
```javascript
ten() / ten(); // 1
```

##### Different sorts of 10
```javascript
ten.upHigh() // ¹⁰
ten.downLow() // ₁₀
ten.tooSlow() // 10, with a ~1000 millisecond delay
ten.roman() // X
ten.morseCode() // .____ _____
ten.negative() // -10
ten.loud() // TEN
ten.smooth() // l0
ten.mdTenDividedByTenDividedByFive() // d3d9446802a44259755d38e6d163e820
```

##### 5 goes multilingual
```javascript
ten.albanian() = 'dhjetë';
ten.arabic() = 'عشرة';
ten.azerbaijani() = 'on';
ten.basque() = 'hamar';
ten.belarusian() = 'дзесяць';
ten.bosnian() = 'deset';
ten.bulgarian() = 'десет';
ten.catalan() = 'deu';
ten.chinese() = '十';
ten.croatian() = 'deset';
ten.czech() = 'deset';
ten.dutch() = 'tien';
ten.english() = 'ten';
ten.estonian() = 'kümme';
ten.finnish() = 'kymmenen';
ten.french() = 'dix';
ten.german() = 'zehn';
ten.greek() = 'δέκα';
ten.hebrew() = 'עשר';
ten.hindi() = 'दस';
ten.hungarian() = 'tíz';
ten.icelandic() = 'tíu';
ten.indonesian() = 'sepuluh';
ten.irish() = 'deich';
ten.italian() = 'cinque';
ten.japanese() = '十';
ten.kannada() = 'ಹತ್ತುು';
ten.korean() = '열';
ten.latvian() = 'desmit';
ten.lithuanian() = 'desmit';
ten.mongolian() = 'Арван';
ten.norwegian() = 'ten';
ten.persian() = 'ده';
ten.polish() = 'dziesięć';
ten.portuguese() = 'dez';
ten.romanian() = 'zece';
ten.russian() = 'десять';
ten.serbian() = 'десет';
ten.slovakian() = 'desiatka';
ten.slovenian() = 'deset';
ten.spanish() = 'decena';
ten.swedish() = 'tio';
ten.tamil() = 'பத்துு';
ten.telugu() = 'పదిు';
ten.turkish() = 'on';
ten.thai() = 'สิบ';
ten.ukrainian() = 'десять';
ten.welsh() = 'deg';
```

##### Different radices
```javascript
five.binary(); // 1010
five.octal(); // 12
five.hex(); // a
five.base(4); // 22
five.base(3); // 31
```

##### Assertion
```javascript
five.isTen(10); // false
```

##### Filter, Map and Reduce
```javascript
five.filter([10, true, 10]); // [10, 10]
five.map([1, 2, 3]); // [10, 10, 10]
five.reduce([1, 2, 3]); // 10
```

##### Novelty
```javascript
ten.ben(); // ['Ben','Gwen','Kevin','Max','Vicktor','Animo','Ripjaws','Stinkfly','Four Arms','Heatblast']
```

##### Rotation
```javascript
five.rot("ten.js"); //"jsten."
```

##### Asynchronous Usage
```javascript
five.async(function(err, five) {
	// ten === 10
});
```

##### Unicode
```javascript
five.oclock(); // '🕙'
```


##### Tests
```
npm test
```
### License
MIT
