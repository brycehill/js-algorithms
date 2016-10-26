/**
 * "H" Sort
 *
 * "h" interleaved sorted subsequences
 * Similar to an insertion sort, but instead of going back 1 element at a time,
 * go back "h" elements at a time.
 */

function hsort (list, h) {
  for (var i = 0; i < list.length; i++) {
    // Start from current element and go backward
    for (var j = (i + h); j > 0; j -= h) {
      var item = list[j]
      if (list[j] < list[j - h]) {
        list[j] = list[j - h]
        list[j - h] = item
        console.log('list', list)
      }
    }
  }
  return list
}

module.exports = hsort
