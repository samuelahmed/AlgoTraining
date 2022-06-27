//breath first search
//good for finding shortest path on a unweighted graph
// start at abritrary node and explore its neighbors and so on. 
// maintain queue of which nodes to visit next
// visit neightbor + add its neightbors to queue, etc.
// for queue we either enqueue or dequeue, it also has a front and back
//REDO THIS WITH BETTER VARIABLE NAMES


const bfs = (graph, root) => {
    let rootDistance = {};

    for (let i = 0; i < graph.length; i += 1) {
        rootDistance[i] = Infinity;
    }
    rootDistance[root] = 0;

    //queue to keep track of nodes to visit
    let queue = [root];

    //current node we are traversing
    let current; 

    //loop to traverse until there are no more nodes to traverse
    while (queue.length != 0) {
        current = queue.shift();

        let currentConnected = graph[current];
        let neighborIndex = [];
        let firstConnected = currentConnected.indexOf(1);

        while (firstConnected != -1) {
            neighborIndex.push(firstConnected);
            firstConnected = currentConnected.indexOf(1, firstConnected + 1);
        }

        for (let j = 0; j < neighborIndex.length; j += 1) {
            if (rootDistance[neighborIndex[j]] === Infinity) {
                rootDistance[neighborIndex[j]] = rootDistance[current] + 1; 
                queue.push(neighborIndex[j])
            }
        }
    }
    return rootDistance;
};

//graph 
var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];

  console.log(bfs(exBFSGraph, 1));