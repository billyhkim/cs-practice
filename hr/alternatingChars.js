function alternatingCharacters(s) {
  let stringArr = [...s];
  let deleteCount = 0;

  for (let i = 1; i < stringArr.length; i++) {
    if (stringArr[i] === stringArr[i - 1]) {
      deleteCount++;
    }
  }

  return deleteCount;
}

alternatingCharacters("AAAA");
