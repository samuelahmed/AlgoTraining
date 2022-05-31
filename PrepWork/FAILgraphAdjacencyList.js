//TIME  find adjacent nodes O(1)
//TIME check if nodes are connected O(log v) if each row is sorted
//Space O(e) 


//know their own value & store list of edges
class Node {
    constructor(value) {
        this.value = value
        this.edgesList = []
    }
    connect(node){
        this.edgesList.push(node)
        node.edgesList.push(this)
    }

    //EXTRA METHODS NOT NEEDED TO CREATE THE GRAPH
    getAdjacentNodes() {
        return this.edgesList.map(edge => edge.value)
    }
    isConnected(node) {
        return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1 
    }
}

//holds the nodes
class Graph {
    constructor(nodes) {
        //ES6 spread operator
        this.nodes = [...nodes]

    }
    addToGraph(node){
        this.nodes.push(node)
    }
}

const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')
const nodeE = new Node('E')

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE])

nodeA.connect(nodeB)
nodeA.connect(nodeD)
nodeB.connect(nodeC)
nodeC.connect(nodeD)
nodeC.connect(nodeE)
nodeD.connect(nodeE)


//looping through the nodes to console log their output
    // for (let node of graph.nodes) {
    //     console.log(`Node ${node.value}`)
    //     for (let connectedNode of node.edgesList) {
    //         console.log(`Node ${node.value} is connected to ${connectedNode.value}`)
    //     }
    // }


//graph will create an array so we have to loop through to open it up
    // console.log(nodeA, graph)
    // console.log(nodeB, graph)


//ADDITIONAL METHODS
    // console.log(nodeA.getAdjacentNodes())
    // console.log(nodeA.isConnected(nodeB))
    // console.log(nodeA.isConnected(nodeE))




//BFS FUNCTION

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
        let firstConnectedNode = currentConnected.indexOf(1);

        while (firstConnectedNode != -1) {
            neighborIndex.push(firstConnectedNode);
            firstConnectedNode = currentConnected.indexOf(1, firstConnectedNode + 1);
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




console.log(bfs(nodeA))