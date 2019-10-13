function largestPalindrome() {
  let product, productReversed; 
  let _3DigitProduct = 0;
  
  for (let i = 100; i <= 999; i++) { 
    for (let j = 100; j <= 999; j++) {
      product = i * j;
      productReversed = Number((i * j).toString().split("").reverse().join(""));
      
      if (product === productReversed && _3DigitProduct < product) {
        _3DigitProduct = product;
        // console.log(`i: ${i}, j: ${j}`);
      }
    }
  }

  console.log(`three-digit product: ${_3DigitProduct}`);
}

largestPalindrome();