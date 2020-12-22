const genGraph = require('./generator');
const getCriticalPaths = require('./paths');
const graph = require('./graph2')
const { getDistances: getDistances2, getPath } = require('./ford');

//const graph = genGraph(15, 3, 2, 6, 1, 5);
//console.dir({ graph }, { depth: 4 });

const paths = getCriticalPaths(graph);

console.dir({ paths });


































//console.dir({ graph }, {  depth: 5 });

//const distances = getDistances(graph, 3);
//console.dir({ distances }, { depth: 4 });

//console.dir({ distances2: distances2[distances2.length - 2] }, { depth: 4 });

//const path1 = getPath(distances, 5);
//const path2 = getPath(distances2[distances2.length - 2], 5);


//const path = getCriticalPath(graph);
//console.dir({ path }, { depth: 4 });