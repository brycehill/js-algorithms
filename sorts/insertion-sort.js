/**
 * Insertion Sort
 *
 * On each iteration, the inner loop moves right to left, from the current
 * element down to 0. On each iteration, swap the current value with each
 * larger value to the left.
 *
 * [ 5, 2, 9, 5, 0 ]
 * [ 2, 5, 9, 5, 0 ]
 * [ 2, 5, 5, 9, 0 ] <-- Note the `0` begin moving backwards here
 * [ 2, 5, 5, 0, 9 ]
 * [ 2, 5, 0, 5, 9 ]
 * [ 2, 0, 5, 5, 9 ]
 * [ 0, 2, 5, 5, 9 ]
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
