const intToRoman = function(num) {
  // 1. create num to roman map
  const numRomanValues = {
    '1000': 'M',
    '900': 'CM',
    '500': 'D',
    '400': 'CD',
    '100': 'C',
    '90': 'XC',
    '50': 'L',
    '40': 'XL',
    '10': 'X',
    '9': 'IX',
    '5': 'V',
    '4': 'IV',
    '1': 'I'
  };
  // 2. create array from Object.keys with reverse to go from largest to smallest
  const numValues = Object.keys(numRomanValues).reverse();
  // 3. declare empty romanValue
  let romanValue = '';
  
  // 4a. nested loops--first outer for loop to decrement largest available value from num
  for (let i = 0; i < numValues.length; i += 1) {
    let cur = numValues[i];
    
    // 4b. inner while loop to continue decrementing cur from num and adding new romanValue until cur becomes greater than num
    while (cur <= num) {
      num -= cur;
      romanValue += numRomanValues[cur];
    }
  }
  
  return romanValue;
};

intToRoman('2431');