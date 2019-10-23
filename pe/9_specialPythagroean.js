function specialPythagorean() {
  // sum of x, y, z to be 1000
  let x, y, z;

  for (y = 1; y < 500; y++) {
    x = (500000 - (1000 * y)) / (1000 - y);
    z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    
    if (x + y + z === 1000 && Number.isInteger(x) && Number.isInteger(y) && Number.isInteger(z)) {
      console.log(x, y, z, (x*y*z));
    }
  }
}

specialPythagorean();