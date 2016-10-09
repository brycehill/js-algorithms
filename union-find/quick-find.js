//

// Eager version
function QuickFind (n) {
  let list = []

  for (let i = 0; i < n; i++) {
    list[i] = i
  }

  // N time
  this.union = (p, q) => {
    const pid = list[p]
    const qid = list[q]
    for (let i = 0; i < list.length; i++) {
      if (list[i] === pid) list[i] = qid
    }
  }

  // N time ???
  this.find = i => list[i]
  this.connected = (i, j) => list[i] === list[j]
}

module.exports = QuickFind
