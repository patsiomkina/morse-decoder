const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let wordArr = [];
	let startMorse = [];
	let morse = [];
	let resultArr = [];

	for (let i = 0; i < expr.length; i = i + 10) {
		let slice = expr.slice(i, i + 10);
		if (slice[0] === '*') {
			startMorse.push([' ']);
		} else {
			for (let i = 0; i < 10; i = i + 2) {
				if (slice[i] === '1') {
					if (slice.slice(i, i + 2) === '10') {
						wordArr.push('.');
					} else if (slice.slice(i, i + 2) === '11') {
						wordArr.push('-');
					}
				}
			}
			startMorse.push(wordArr);
			wordArr = [];		
		}
	}

	for (let arr of startMorse) {
		morse.push(arr.join(''));
	}

	for (let item of morse) {
		if (item === ' ') {
			resultArr.push(' ');
		} else {
			for (const [key, value] of Object.entries(MORSE_TABLE)) {
				if (item === key) {
					resultArr.push(value);
				} 
			}
		}
	}
	return resultArr.join('');
}

module.exports = {
  decode
}