
// Put the root of the smaller tree under the larger tree
function WeightedQuickUnion (n) {
  let list = []
  let size = []

  for (let i = 0; i < n; i++) {
    list[i] = i
    size[i] = 1
  }

  // lg N
  this.union = (p, q) => {
    const pRoot = root(p)
    const qRoot = root(q)

    if (pRoot === qRoot) return

    if (size[pRoot] > size[qRoot]) {
      list[qRoot] = pRoot
      size[pRoot] += size[qRoot]
    } else {
      list[pRoot] = qRoot
      size[qRoot] += size[pRoot]
    }
  }

  const root = i => {
    while (i !== list[i]) {
      // path compression. Set list[i] to it's grandparent
      // Not quite true root path comopression, but easier and faster than
      // creating another loop.
      list[i] = list[list[i]]
      i = list[i]
    }
    return i
  }

  //  lg N
  this.connected = (i, j) => root(i) === root(j)
}

module.exports = WeightedQuickUnion
