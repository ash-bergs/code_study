// data sets
const ones = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

// helper functions
const convertTens = (n) => {
  if (n < 20) {
    // if less then twenty, return the string value from ones
    return ones[n];
  } else {
    let ten = Math.floor(n / 10);
    // returns the remainder after division of one number by another
    // i.e. 45 % 10 leaves us with 5
    let remainder = n % 10;
    return tens[ten] + (remainder ? '-' + ones[remainder] : '');
  }
};

const convertHundreds = (n) => {
  let hundred = Math.floor(n / 100);
  let remainder = n % 100;

  const num = hundred
    ? ones[hundred] +
      ' ' +
      'hundred' +
      (remainder ? ' ' + convertTens(remainder) : '')
    : '';
  console.log(num);
  return num;
};

const convertThousands = (n) => {
  let thousand = Math.floor(n / 1000);
  let remainder = n % 1000;
  return (
    (thousand
      ? (thousand < 100 ? convertTens(thousand) : convertHundreds(thousand)) +
        ' thousand' +
        (remainder ? ' ' : '')
      : '') +
    (remainder
      ? remainder < 100
        ? convertTens(remainder)
        : convertHundreds(remainder)
      : '')
  );
};

function number2words(n) {
  if (n === 0) return 'zero';
  if (n <= 99) return convertTens(n);
  if (n > 99 && n <= 999) return convertHundreds(n);
  return convertThousands(n);
}
