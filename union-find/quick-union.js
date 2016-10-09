// A way to solve the Dynamic Connectivity problem

// LAZY version using tree nodes
function QuickUnion (n) {
  let list = []

  // N array accesses
  for (let i = 0; i < n; i++) {
    list[i] = i
  }

  // Change root of p to point to root of q
  this.union = (p, q) => {
    let pRoot = root(p)
    list[pRoot] = root(q)
  }

  const root = i => {
    while (i !== list[i]) {
      i = list[i]
    }
    return i
  }

  this.connected = (i, j) => root(i) === root(j)
}

module.exports = QuickUnion
