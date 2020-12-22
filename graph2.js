module.exports = [
  { weight: 1, id: 0,  level: 3, edges: []},
  { weight: 2, id: 1,  level: 0, edges: [{ weight: 2, target: 7 }]},
  { weight: 3, id: 2,  level: 0, edges: [
    { weight: 4, target: 7 },
    { weight: 3, target: 8 },
  ]},
  { weight: 3, id: 3,  level: 0, edges: [{ weight: 3, target: 8 }]},
  { weight: 1, id: 4,  level: 0, edges: [{ weight: 1, target: 9 }]},
  { weight: 2, id: 5,  level: 0, edges: [
    { weight: 2, target: 8 },
    { weight: 1, target: 9 },
    { weight: 3, target: 10 },
  ]},
  { weight: 1, id: 6,  level: 0, edges: [
    { weight: 2, target: 10 },
    { weight: 3, target: 11 },
  ]},
  { weight: 2, id: 7,  level: 1, edges: [
    { weight: 1, target: 12 },
    { weight: 2, target: 13 },
  ]},
  { weight: 4, id: 8,  level: 1, edges: [
    { weight: 1, target: 12 },
    { weight: 2, target: 13 },
  ]},
  { weight: 1, id: 9,  level: 1, edges: [{ weight: 3, target: 0 }]},
  { weight: 2, id: 10, level: 1, edges: [{ weight: 4, target: 13 }]},
  { weight: 3, id: 11, level: 1, edges: [{ weight: 5, target: 0 }]},
  { weight: 2, id: 12, level: 2, edges: [{ weight: 3, target: 14 }]},
  { weight: 3, id: 13, level: 2, edges: [
    { weight: 3, target: 14 },
    { weight: 2, target: 0 },
  ]},
  { weight: 2, id: 14, level: 3, edges: []},
]