/**
 * Insertion Sort
 *
 * On each iteration, the inner loop moves right to left, from the current
 * element down to 0. On each iteration, swap the current value with each
 * larger value to the left.
 */

function insertionSort (list) {
  for (var i = 0; i < list.length; i++) {
    // Start from current element and go backward
    for (var j = i; j > 0; j--) {
      var item = list[j]
      if (list[j] < list[j - 1]) {
        list[j] = list[j - 1]
        list[j - 1] = item
        console.log('list', list)
      }
    }
  }
  return list
}

module.exports = insertionSort
