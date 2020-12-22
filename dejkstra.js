const getDistances = (nodes, target, used) => {
  const len = nodes.length;
  const distances = Array(len).fill(undefined).map(() => ({
    val: Infinity,
    prev: null,
  }));

  used = used || Array(len).fill(false);
  distances[target].val = 0;


  while (true) {
    const { i: minI } = distances.reduce((prev, curr, i) => {
      if (prev.obj.val > curr.val && !used[i]) {
        return {
          obj: curr,
          i,
        }
      } else {
        return prev;
      }
    }, { obj: { val: Infinity } });

    if (minI === undefined) break;
    used[minI] = true;

    const edges = nodes[minI].edges;
    for (const edge of edges) {
      if (distances[edge.target].val > distances[minI].val + edge.weight) {
        distances[edge.target] = {
          val: distances[minI].val + edge.weight,
          prev: minI,
        }
      }
    }
  }

  return distances;
}

module.exports = getDistances;