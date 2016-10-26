/**
 * Selection Sort
 *
 * Starting with the first element, loop through the array and find the
 * smallest value. Then swap the smallest value with the current iteration's
 * element.
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
