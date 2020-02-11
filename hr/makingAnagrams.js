/*
Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

makeAnagram has the following parameter(s):
a: a string
b: a string
*/

function makeAnagram(a, b) {
  const stringA = a.split("");
  const stringB = b.split("");

  const stringAMap = stringA.reduce((map, cur) => {
    if (map[cur] === undefined) {
      map[cur] = 1;
    } else {
      map[cur]++;
    }
    return map;
  }, {});

  const charMap = stringB.reduce((map, cur) => {
    if (map[cur] === undefined) {
      map[cur] = -1;
    } else {
      map[cur]--;
    }
    return map;
  }, {...stringAMap});

  let total = 0;
  for (let key in charMap) {
    total += Math.abs(charMap[key]);
  }

  return total;
}

makeAnagram("showman", "woman");
