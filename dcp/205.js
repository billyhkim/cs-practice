/*
Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578.
*/

function findAllPermutations(string) {
  let results = []

  if (string.length === 1) {
    results.push(string)
    return results
  }

  for (let i = 0; i < string.length; i++) {
    let firstDigit = string[i]
    let digitsRemaining = string.substring(0, i) + string.substring(i + 1)
    let innerPermutations = findAllPermutations(digitsRemaining)

    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstDigit + innerPermutations[j])
    }
  }

  console.log(results)
  return results
}

function nextAbsolutePermutation(string) {

}

findAllPermutations('123')