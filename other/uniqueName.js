/*
Only return unique names/strings from array.
*/

const uniqueNames = arr => {
  // const nameMap = arr.reduce((acc, cur) => {
  //   acc[cur] ? acc[cur]++ : acc[cur] = 1;
  //   return acc;
  // }, {});
  const nameMap = {};
  arr.forEach(name => {
    if (nameMap[name]) {
      nameMap[name]++;
    } else {
      nameMap[name] = 1;
    }
  });


  let result = [];

  for (let name in nameMap) {
    if (nameMap[name] === 1) result.push(name);
  }

  return result;
};

uniqueNames(['sharon', 'mike', 'mike', 'sharon', 'albert', 'bob', 'xavier']);