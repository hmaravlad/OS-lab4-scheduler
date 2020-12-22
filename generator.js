
const genInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

const getRandom = (array) => array[genInt(0, array.length)];

const Counter = (start = -1) => () => {
  start += 1;
  return start;
}

const NodeGenerator = (counter, levels, minWeight, maxWeight) => () => ({
  id: counter(),
  level: genInt(0, levels),
  //weight: genInt(minWeight, maxWeight),
  edges: [],
});

const EdgeGenerator = (minWeight, maxWeight) => (target) => ({
  target,
  weight: genInt(minWeight, maxWeight),
});

const genGraph = (N, levels, minWeight, maxWeight, minEdges, maxEdges) => {
  const nodes = [];
  const counter = Counter();

  const nodeGenerator = NodeGenerator(counter, levels, minWeight, maxWeight);
  const edgeGenerator = EdgeGenerator(minWeight, maxWeight);

  for (let i = 0; i < N; i++) {
    nodes.push(nodeGenerator());
  };

  for (const node of nodes) {
    const edges = [];
    const edgesN = genInt(minEdges, maxEdges);
    const validNodes = nodes.filter(n => n.level > node.level);
    for (let i = 0; i < edgesN; i++) {
      const target = getRandom(validNodes.filter(n => !edges.find(e => e.target === n.id)));
      if (target) edges.push(edgeGenerator(target.id));
    }
    node.edges = edges;
  }

  return nodes;
}

module.exports = genGraph;