const getDistances = (nodes, target, exists) => {
  const len = nodes.length;
  const distances = [Array(len).fill(undefined).map(() => ({
    val: Infinity,
    prev: null,
  }))];

  exists = exists || Array(len).fill(true);
  distances[0][target].val = nodes[target].weight;

  let toContinue = true;
  let i = 0;

  while (toContinue) {
    toContinue = false;

    distances.push(distances[i].slice());

    for (const node of nodes) {
      if (!exists[node.id]) continue;
      if (distances[i][node.id].val >= Infinity) continue;
    
      for (const edge of node.edges) {
        if (!exists[edge.target]) continue;
        if (distances[i + 1][edge.target].val > distances[i][node.id].val + nodes[edge.target].weight) {
          distances[i + 1][edge.target].val = distances[i][node.id].val + nodes[edge.target].weight;
          distances[i + 1][edge.target].prev = node.id;
          toContinue = true;
        }
      }
    }

    i += 1;
  }


  return distances;
}

const getPath = (distances, target) => {
  let path = [];
  let curr = target;
  while (curr !== null && curr >= 0) {
    path.push(curr);
    curr = distances[curr].prev;
  }
  return path.reverse();
}

module.exports = {
  getDistances,
  getPath
};