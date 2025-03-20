// For documentation on Number objects, go to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const num = 10;

const balance = new Number(300);

console.log(num);     // 10
console.log(balance); // [Number: 300]
console.log(balance.valueOf()); // 300
console.log(balance.toString()); // 300
console.log(balance.toString().length); // 3



console.log(balance.toFixed()); // 300   // toFixed() method formats a number using fixed-point notation just like round
console.log(balance.toFixed(2)); // 300.00   // toFixed() method formats a number using fixed-point notation just like round
console.log(balance.toPrecision(3)); // 300   // toPrecision() method formats a number to a specified length
console.log(balance.toExponential(2)); // 3.00e+2   // toExponential() method returns a string representing the Number object in exponential notation
console.log(balance.toFixed(3)); // 300.000  // to study click here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed



console.log(balance.toString(2)); // 100101100 // toString() method returns a string representing the specified object in the specified radix (base)
console.log(parseFloat(balance)); // 300        // parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number
console.log(parseInt(balance)); // 300 // parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems)



console.log(150.896235.toFixed(32)); // 150.89623499999999012288753874599934
console.log(150.896235.toFixed(2)); // 150.90
console.log(150.896235.toPrecision(3)); // 151
console.log(150.896235.toExponential(2)); // 1.51e+2
console.log(150.896235.toString(2)); // 10010110.11100011100001010001111010111000010100000101
console.log(typeof(parseFloat(150.896235))); // number
console.log(150.896235.toPrecision(32)); //  150.89623499999999012288753874600
console.log(typeof(150.896235.toFixed(3))); // string


console.log((1000000000000000128).toString()); // '1000000000000000100'
console.log((1000000000000000128).toFixed(0)); // '1000000000000000128'


// The output of toFixed() may be more precise than toString() for some values, because toString()....
// only prints enough significant digits to distinguish the number from adjacent number values.
// as shown in the above example


const num1 = new Number(1234567890);
console.log(num1.toLocaleString()); // 1,234,567,890
// the above is in hundreds of thousands, millions, billions, and so on, depending on the language and the value of the number

console.log(num1.toLocaleString('hi-IN')); // 1,23,45,67,890 this is in Hindi format
console.log(num1.toLocaleString('en-IN')); // 1,23,45,67,890 this is in Indian format
console.log(num1.toLocaleString('en-US')); // this is in US format
console.log(num1.toLocaleString('en-GB')); // this is in UK format
console.log(num1.toLocaleString('en-AU')); // this is in Australia format
console.log(num1.toLocaleString('ar-EG')); // ١٬٢٣٤٬٥٦٧٬٨٩٠ this is in Arabic format
console.log(num1.toLocaleString('ja-EG')); // this is in Japanese format
console.log(num1.toLocaleString("zh-Hans-CN-u-nu-hanidec")); //  一,二三四,五六七,八九〇 this is in Chinese format
console.log(num1.toLocaleString("hi-IN-u-nu-deva")); // १,२३,४५,६७,८९० this is in Hindi format



// for some  more languages.....



console.log(num1.toLocaleString("zh-Hans-CN-u-nu-hanidec")); // Chinese ... 一,二三四,五六七,
console.log(num1.toLocaleString("ko-KR-u-nu-kore")); // Korean..... `일,이삼사,오육칠팔구
console.log(num1.toLocaleString("ja-JP-u-nu-jpanfin")); // Japanese..... 一,二三四,五六七,
console.log(num1.toLocaleString("he-IL-u-nu-hebr")); // Hebrew..... א,בגד,הו,זחטי
console.log(num1.toLocaleString("ar-EG-u-nu-arab")); // Arabic......... ١,٢٣٤,٥٦٧,٨٩٠
console.log(num1.toLocaleString("hi-IN-u-nu-deva")); // Hindi........ १,२३,४५,६७,८९०
console.log(num1.toLocaleString("bn-IN-u-nu-beng")); // Bengali........ ১,২৩,৪৫,৬৭,৮৯০
console.log(num1.toLocaleString("te-IN-u-nu-telu")); // Telugu........ ౧,౨౩,౪౫,౬౭,౮౯౦
console.log(num1.toLocaleString("ta-IN-u-nu-tamldec")); // Tamil........ ௧,௨௩,௪௫,௬௭,௮௯௦
console.log(num1.toLocaleString("gu-IN-u-nu-gujr")); // Gujarati........ ૧,૨૩,૪૫,૬૭,૮૯૦
console.log(num1.toLocaleString("pa-IN-u-nu-guru")); // Punjabi........ ੧,੨੩,੪੫,੬੭,੮੯੦
console.log(num1.toLocaleString("kn-IN-u-nu-knda")); // Kannada........ ೧,೨೩,೪೫,೬೭,೮೯೦
console.log(num1.toLocaleString("ml-IN-u-nu-mlym")); // Malayalam........ ൧,൨൩,൪൫,൬൭,൮൯൦
console.log(num1.toLocaleString("mr-IN-u-nu-deva")); // Marathi........ १,२३,४५,६७,८९०
console.log(num1.toLocaleString("th-TH-u-nu-thai")); // thai........ ๑,๒๓,๔๕,๖๗,๘๙๐
console.log(num1.toLocaleString("el-GR-u-nu-grek")); // Greek........ α,βγδ,εζθ,ηικ,λμνξ
console.log(num1.toLocaleString("ru-RU-u-nu-cyrl")); // Russian........ а,бвгд,ежз,ийкл,мнопр
console.log(num1.toLocaleString("uk-UA-u-nu-cyrl")); // Ukrainian........ а,бвгд,ежз,ийкл,мнопр










// to study more click here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

//----------------------------------------------------------For Currency------------------------------------------------------------
// for currency we can use toLocaleString() method with some options


const currency = 123456.789;

console.log(currency.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // $123,456.79
console.log(currency.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })); // ₹1,23,456.79
console.log(currency.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })); // £123,456.79
console.log(currency.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })); // $123,456.79
console.log(currency.toLocaleString('ar-EG', { style: 'currency', currency: 'EGP' })); // E£123,456.79
console.log(currency.toLocaleString('ja-EG', { style: 'currency', currency: 'JPY' })); // ¥123,457
console.log(currency.toLocaleString("zh-Hans-CN-u-nu-hanidec", { style: 'currency', currency: 'CNY' })); // ¥123,456.79
console.log(currency.toLocaleString("hi-IN-u-nu-deva", { style: 'currency', currency: 'INR' })); // ₹१,२३,४५६.७९
console.log(currency.toLocaleString("ko-KR-u-nu-kore", { style: 'currency', currency: 'KRW' })); // ₩123,456.79
console.log(currency.toLocaleString("ja-JP-u-nu-jpanfin", { style: 'currency', currency: 'JPY' })); // ¥123,457
console.log(currency.toLocaleString("he-IL-u-nu-hebr", { style: 'currency', currency: 'ILS' })); // ₪123,456.79
console.log(currency.toLocaleString("ar-EG-u-nu-arab", { style: 'currency', currency: 'EGP' })); // ج.م.‏ 123,456.79
console.log(currency.toLocaleString("hi-IN-u-nu-deva", { style: 'currency', currency: 'INR' })); // ₹१,२३,४५६.७९
console.log(currency.toLocaleString("bn-IN-u-nu-beng", { style: 'currency', currency: 'BDT' })); // ৳১,২৩,৪৫৬.৭৯
console.log(currency.toLocaleString("te-IN-u-nu-telu", { style: 'currency', currency: 'INR' })); // ₹౧,౨౩,౪౫౬.౭౯
console.log(currency.toLocaleString("ta-IN-u-nu-tamldec", { style: 'currency', currency: 'INR' })); // ₹௧,௨௩,௪௫௬.௭௯
console.log(currency.toLocaleString("gu-IN-u-nu-gujr", { style: 'currency', currency: 'INR' })); // ₹૧,૨૩,૪૫૬.૭૯
console.log(currency.toLocaleString("pa-IN-u-nu-guru", { style: 'currency', currency: 'INR' })); // ₹੧,੨੩,੪੫੬.੭੯
console.log(currency.toLocaleString("kn-IN-u-nu-knda", { style: 'currency', currency: 'AED' })); // د.إ.‏ 123,456.79    // AED is the currency code for United Arab Emirates Dirham
console.log(currency.toLocaleString("ml-IN-u-nu-mlym", { style: 'currency', currency: 'GBP' })); // £ ൧൨൩,൪൫൬.൭൯




// -----------------------------------------------------------Maths------------------------------------------------------------







//Document: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math



// Everything same as we did in Java like Math.pow(), Math.sqrt(), Math.abs(), Math.round(), Math.floor(), Math.ceil(), Math.min(), Math.max(), Math.random(), Math.PI

console.log(Math.PI); // 3.141592653589793
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(64)); // 8
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.4)); // 5
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150
console.log(Math.random()); // Any random number between 0.0 to 1.0
console.log(Math.random() * 100); // Any random number between 0.0 to 100.0





























// language codes :


// English Variants
// toLocaleString("en-US")   // United States
// toLocaleString("en-GB")   // United Kingdom
// toLocaleString("en-AU")   // Australia
// toLocaleString("en-CA")   // Canada
// toLocaleString("en-IN")   // India
// toLocaleString("en-NZ")   // New Zealand
// toLocaleString("en-ZA")   // South Africa
// toLocaleString("en-IE")   // Ireland
// toLocaleString("en-SG")   // Singapore

// French Variants
// toLocaleString("fr-FR")   // France
// toLocaleString("fr-CA")   // Canada
// toLocaleString("fr-BE")   // Belgium
// toLocaleString("fr-CH")   // Switzerland
// toLocaleString("fr-LU")   // Luxembourg

// Spanish Variants
// toLocaleString("es-ES")   // Spain
// toLocaleString("es-MX")   // Mexico
// toLocaleString("es-CO")   // Colombia
// toLocaleString("es-AR")   // Argentina
// toLocaleString("es-CL")   // Chile
// toLocaleString("es-PE")   // Peru
// toLocaleString("es-VE")   // Venezuela

// Chinese Variants
// toLocaleString("zh-CN")   // China (Simplified)
// toLocaleString("zh-TW")   // Taiwan (Traditional)
// toLocaleString("zh-HK")   // Hong Kong (Traditional)
// toLocaleString("zh-SG")   // Singapore (Simplified)
// toLocaleString("zh-MO")   // Macau (Traditional)

// Arabic Variants
// toLocaleString("ar-SA")   // Saudi Arabia
// toLocaleString("ar-AE")   // United Arab Emirates
// toLocaleString("ar-EG")   // Egypt
// toLocaleString("ar-IQ")   // Iraq
// toLocaleString("ar-MA")   // Morocco
// toLocaleString("ar-DZ")   // Algeria

// German Variants
// toLocaleString("de-DE")   // Germany
// toLocaleString("de-AT")   // Austria
// toLocaleString("de-CH")   // Switzerland
// toLocaleString("de-BE")   // Belgium
// toLocaleString("de-LU")   // Luxembourg

// Portuguese Variants
// toLocaleString("pt-PT")   // Portugal
// toLocaleString("pt-BR")   // Brazil
// toLocaleString("pt-MO")   // Macau

// Indian Languages
// toLocaleString("hi-IN")   // Hindi
// toLocaleString("bn-IN")   // Bengali
// toLocaleString("ta-IN")   // Tamil
// toLocaleString("te-IN")   // Telugu
// toLocaleString("mr-IN")   // Marathi
// toLocaleString("gu-IN")   // Gujarati
// toLocaleString("kn-IN")   // Kannada
// toLocaleString("ml-IN")   // Malayalam
// toLocaleString("pa-IN")   // Punjabi
// toLocaleString("ur-IN")   // Urdu

// Other Popular Languages
// toLocaleString("ja-JP")   // Japanese
// toLocaleString("ko-KR")   // Korean
// toLocaleString("ru-RU")   // Russian
// toLocaleString("it-IT")   // Italian
// toLocaleString("nl-NL")   // Dutch
// toLocaleString("tr-TR")   // Turkish
// toLocaleString("th-TH")   // Thai
// toLocaleString("vi-VN")   // Vietnamese
// toLocaleString("he-IL")   // Hebrew
// toLocaleString("fa-IR")   // Persian
// toLocaleString("uk-UA")   // Ukrainian
// toLocaleString("pl-PL")   // Polish
// toLocaleString("sv-SE")   // Swedish
// toLocaleString("da-DK")   // Danish
// toLocaleString("fi-FI")   // Finnish
// toLocaleString("no-NO")   // Norwegian
// toLocaleString("cs-CZ")   // Czech
// toLocaleString("hu-HU")   // Hungarian
// toLocaleString("ro-RO")   // Romanian
// toLocaleString("sk-SK")   // Slovak
// toLocaleString("bg-BG")   // Bulgarian
// toLocaleString("hr-HR")   // Croatian
// toLocaleString("sr-RS")   // Serbian
// toLocaleString("el-GR")   // Greek
// toLocaleString("lt-LT")   // Lithuanian
// toLocaleString("lv-LV")   // Latvian
// toLocaleString("et-EE")   // Estonian

// Other Notable Locales
// toLocaleString("is-IS")   // Icelandic
// toLocaleString("ga-IE")   // Irish
// toLocaleString("mt-MT")   // Maltese
// toLocaleString("sl-SI")   // Slovenian
// toLocaleString("mk-MK")   // Macedonian
// toLocaleString("sq-AL")   // Albanian
// toLocaleString("bs-BA")   // Bosnian
// toLocaleString("az-AZ")   // Azerbaijani
// toLocaleString("ka-GE")   // Georgian
// toLocaleString("hy-AM")   // Armenian
// toLocaleString("kk-KZ")   // Kazakh
// toLocaleString("uz-UZ")   // Uzbek





// number systems


// toLocaleString("en-US-u-nu-latn")  // Latin digits (Default)
// toLocaleString("ar-EG-u-nu-arab")  // Arabic-Indic digits
// toLocaleString("hi-IN-u-nu-deva")  // Devanagari digits
// toLocaleString("zh-CN-u-nu-hanidec")  // Chinese decimal
// toLocaleString("pa-IN-u-nu-guru")    // Punjabi with Gurmukhi digits
// toLocaleString("hi-IN-u-nu-deva")   // Hindi with Devanagari digits
// toLocaleString("bn-IN-u-nu-beng")    // Bengali with Bengali digits
// toLocaleString("ta-IN-u-nu-taml")   //   Tamil with Tamil digits
// toLocaleString("te-IN-u-nu-telu")   // Telugu with Telugu digits
// toLocaleString("kn-IN-u-nu-knda")   // Kannada with Kannada digits
// toLocaleString("ml-IN-u-nu-mlym")    // Malayalam with Malayalam digit
// toLocaleString("gu-IN-u-nu-gujr")    // Gujarati with Gujarati digits
// toLocaleString("or-IN-u-nu-orya")   // Oriya with Oriya digits
// toLocaleString("as-IN-u-nu-beng")    // Assamese with Bengali digits (same as Bengali script)
// toLocaleString("ur-IN-u-nu-arab")    // Urdu with Arabic-Indic digits
// toLocaleString("ar-SA-u-nu-arab")    //Arabic (Saudi Arabia) with Arabic-Indic digits
// toLocaleString("fa-IR-u-nu-arab")    // Persian (Iran) with Arabic-Indic digits
// toLocaleString("ps-AF-u-nu-arab")   // Pashto with Arabic-Indic digits
// toLocaleString("ku-IQ-u-nu-arab")    // Kurdish with Arabic-Indic digits
// toLocaleString("en-US-u-nu-latn")   // English (US) with Latin digits (Default)
// toLocaleString("ru-RU-u-nu-cyrl")    //Russian with Cyrillic numerals
// toLocaleString("el-GR-u-nu-grek")    // Greek with Greek numerals
// toLocaleString("ka-GE-u-nu-geor")  // Georgian with Georgian numerals
// toLocaleString("hy-AM-u-nu-armn")  // Armenian with Armenian numerals
// toLocaleString("en-US-u-nu-roman") // Roman numerals
// toLocaleString("ban-ID-u-nu-bali")  // Balinese numerals
//   toLocaleString("km-KH-u-nu-khmr") // Khmer numerals
// toLocaleString("my-MM-u-nu-mymr")  // Myanmar numerals
//  toLocaleString("lo-LA-u-nu-laoo")    // Lao numerals
//  toLocaleString("th-TH-u-nu-thai")   // Thai numerals
//  toLocaleString("su-ID-u-nu-sund")   // Sundanese numerals
// toLocaleString("jv-ID-u-nu-java")  //  Javanese numerals
// toLocaleString("lep-IN-u-nu-lepc")  //Lepcha numerals
// toLocaleString("sat-IN-u-nu-olck") // Ol Chiki numerals (Santali)









// calander systems 

// toLocaleString("en-US-u-ca-gregory")  // Gregorian calendar
// toLocaleString("ar-SA-u-ca-islamic")  // Islamic calendar
// toLocaleString("hi-IN-u-ca-indian")   // Indian national calendar
// toLocaleString("zh-CN-u-ca-chinese")  // Chinese calendar
