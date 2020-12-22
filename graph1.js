const graph = [
  { id: 0, level: 2, edges: [] },
  {
    id: 1,
    level: 1,
    edges: [{ target: 0, weight: 4 }, { target: 6, weight: 2 }]
  },
  { id: 2, level: 1, edges: [{ target: 0, weight: 3 }] },
  {
    id: 3,
    level: 1,
    edges: [{ target: 6, weight: 5 }, { target: 0, weight: 2 }]
  },
  {
    id: 4,
    level: 1,
    edges: [{ target: 0, weight: 2 }, { target: 6, weight: 3 }]
  },
  { id: 5, level: 0, edges: [{ target: 11, weight: 3 }] },
  { id: 6, level: 2, edges: [] },
  {
    id: 7,
    level: 0,
    edges: [
      { target: 1, weight: 3 },
      { target: 10, weight: 3 },
      { target: 6, weight: 4 },
      { target: 3, weight: 5 }
    ]
  },
  {
    id: 8,
    level: 1,
    edges: [{ target: 0, weight: 5 }, { target: 6, weight: 5 }]
  },
  {
    id: 9,
    level: 0,
    edges: [
      { target: 6, weight: 3 },
      { target: 0, weight: 5 },
      { target: 1, weight: 2 }
    ]
  },
  {
    id: 10,
    level: 1,
    edges: [{ target: 0, weight: 5 }, { target: 6, weight: 3 }]
  },
  {
    id: 11,
    level: 1,
    edges: [{ target: 0, weight: 5 }, { target: 6, weight: 4 }]
  },
  { id: 12, level: 1, edges: [{ target: 6, weight: 3 }] },
  { id: 13, level: 0, edges: [{ target: 3, weight: 5 }] },
  {
    id: 14,
    level: 0,
    edges: [
      { target: 11, weight: 2 },
      { target: 10, weight: 3 },
      { target: 8, weight: 3 }
    ]
  }
]
