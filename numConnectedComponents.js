// USING DFS
// 1) traverse the graph 
// build agencency list 
// everytime you do traversal you increment number of regions

n = 5;
edges = [[0,1], [1,2], [3,4]]
edges2 = [[0,1], [1,2], [2,3], [3,4]]

const buildAdjList = (n, edges) => {
    const adjList = Array.from({length: n}, () => []);

    for(let edge of edges) {
        let [src, dest] = edge;


        //IF GRAPH WAS DIRECTED WE WOULD ONLY HAVE TO DO ONE OF THESE
        adjList[src].push(dest);
        adjList[dest].push(src);
    }
    return adjList;
}

//cant do BFS OR DFS (USING BFS)
// for bfs use a queue data structure
// This is traversing through the graph (adjlist = graph)
// do we traverse the entire graph or part of the graph? evertyime we have too call bfs we can tell if the ndoes are connected
const BFS = (node, adjList, visited) => {
    const queue = [node];
    visited[node] = true;

    while(queue.length) {
        let curNode = queue.shift();

        for(let neighbor of adjList[curNode]){
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
}

var countComponents = (n, edges) => {
    const adjList = buildAdjList(n, edges);
    const visited = {};
    let numComponents = 0;

    for(let vertex = 0; vertex < adjList.length; vertex += 1) {
        if(!visited[vertex]){
            numComponents += 1;
            BFS(vertex, adjList, visited); 
        }
    }
    return numComponents
};


console.log(countComponents(n, edges))
console.log(countComponents(n, edges2))
