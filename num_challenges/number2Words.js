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
    const ten = Math.floor(n / 10);
    // returns the remainder after division of one number by another
    // i.e. 45 % 10 leaves us with 5
    const remainder = n % 10;
    // get the string value of the remainder based on the ones array
    const remainderString = remainder ? '-' + ones[remainder] : '';
    const tensString = tens[ten] + remainderString;
    return tensString;
  }
};

const convertHundreds = (n) => {
  const hundred = Math.floor(n / 100);
  const remainder = n % 100;

  const remainderString = remainder ? ' ' + convertTens(remainder) : '';
  // get the string value of the hundreds based on the ones array and add "hundred" to it
  const hundredsString = hundred
    ? ones[hundred] + ' ' + 'hundred' + remainderString
    : '';

  return hundredsString;
};

const convertThousands = (n) => {
  const thousand = Math.floor(n / 1000);
  const remainder = n % 1000;

  if (!thousand) return undefined;

  // get the string value of the thousands based on the ones or the tens (one thousand, fifteen thousand, etc) array and add "thousand" to it
  const thousandsString =
    (thousand < 100 ? convertTens(thousand) : convertHundreds(thousand)) +
    ' ' +
    'thousand';

  if (!remainder) return thousandsString;

  // get the string value of the remainder based on the tens or hundreds array (or ones, depending on the value) and add it to the thousands string
  const remainderString = remainder
    ? remainder < 100
      ? // less than one hundred and we need to convert to tens
        ' ' + convertTens(remainder)
      : // greater than one hundred and we need to convert to hundreds
        ' ' + convertHundreds(remainder)
    : '';

  return thousandsString + remainderString;
};

function number2words(n) {
  if (n === 0) return 'zero';
  if (n <= 99) return convertTens(n);
  if (n > 99 && n <= 999) return convertHundreds(n);
  return convertThousands(n);
}
