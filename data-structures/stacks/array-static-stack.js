// Array variation of a stack
// Last in, first out LIFO

// Basically a non-native version of native arrays...
// Static version where there is a set size of the array
function ArrayStaticStack (size) {
  // Manually keep track of the list and index
  var list = new Array(size)
  var idx = 0

  this.push = x => {
    list[idx++] = x // Add x to list and inc idx
  }

  this.pop = () => {
    return list[--idx] // dec idx and return last item
  }
}

module.exports = ArrayStaticStack
