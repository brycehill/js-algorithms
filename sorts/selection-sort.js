/**
 * Selection Sort
 *
 * Starting with the first element, loop through the array and find the
 * first smallest value. Once you find a value smaller then the previously
 * smallest value, swap it with the current teration's element. Continue to the
 * end of the array and repeat, starting with each next element
 *
 * [ 2, 9, 5, 5, 0 ]
 * [ 0, 9, 5, 5, 2 ] <- swap 0 and 2
 * [ 0, 5, 9, 5, 2 ] <- swap 9 and 5
 * [ 0, 2, 9, 5, 5 ] <- swap 5 and 2
 * [ 0, 2, 5, 9, 5 ] <- swap 5 and 9
 * [ 0, 2, 5, 5, 9 ] <- swap 5 and 9
 */

function selectionSort (list) {
  for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
      var min = list[i]
      if (list[j] < min) {
        list[i] = list[j]
        list[j] = min
        console.log('list', list)
      }
    }
  }
  return list
}

module.exports = selectionSort
