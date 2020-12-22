const { getDistances, getPath } = require('./ford2');

const reverseGraph = (graph) => {
  for (const node of graph) {
    node.weight *= -1;
    for (const edge of node.edges) {
      edge.weight *= -1;
    }
  }
}

const getShortestPath = (nodes, exists) => {
  const distancesMatrix = getDistances(nodes, node.id, exists);
  const distances = distancesMatrix[distancesMatrix.length - 2];

  const { i } = distances
    .reduce((prev, curr, i) => {
      if (curr.val !== Infinity && prev.obj.val > curr.val) {
        return { obj: curr, i }
      } else {
        return prev;
      }
    }, { obj: { val: Infinity } });

  return {
    weight: distances[i].val,
    path: getPath(distances, i),
  }
}


const getCriticalPath = (nodes, exists) => {
  const minLevel = nodes.reduce((prev, curr) => Math.min(prev, exists[curr.id] ? curr.level : prev), Infinity);
  const minLevelNodes = nodes.filter(node => node.level === minLevel);
  reverseGraph(nodes);

  let minPath;
  let minPathWeight = Infinity;
  for (node of minLevelNodes) {
    if (!exists[node.id]) continue;
    const { path, weight } = getShortestPath(nodes, exists);

    if (weight < minPathWeight) {
      minPath = path;
      minPathWeight = weight;
    }
  }
  reverseGraph(nodes);
  return minPath
}

const updateExistArray = (prev, path) => {
  path?.map(node => prev[node] = false);
}

const getCriticalPaths = (nodes) => {
  const paths = [];
  const exists = Array(nodes.length).fill(true);
  while (exists.reduce((prev, curr) => prev || curr)) {
    const path = getCriticalPath(nodes, exists);
    paths.push(path);
    updateExistArray(exists, path);
  }

  return paths
}

const nullifyPath = (path) => {
  for (let i = 0; i < path.length - 1; i++) {
    path[i].edges.find(edge => edge.target = i + 1).weight = 0;
  }
}

module.exports = getCriticalPaths;