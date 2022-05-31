//Airport example https://www.youtube.com/watch?v=cWNEl4HE2OE


//DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

//GRAPH - ADJ LIST USING MAP 
const adjacencyList = new Map();

//Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

//add edge, undirected 
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

//Create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

//SEE ALL POSSIBLE ROUTES
// console.log(adjacencyList)


//FINDING ROUTE BETWEEN PHX & BKK

//BFS

function bfs(start){

    const visited = new Set();
    const queue = [start]

    while (queue.length > 0) {

        const airport = queue.shift(); 

        const destinations = adjacencyList.get(airport);

        for (const destination of destinations) {
            // console.log(destination);
            
            if (destination === 'BKK'){
                // console.log('BFS found it!')
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination)
            }
        }
    }
}

// bfs('PHX')



//DOES A ROUTE FROM PHX to BKK exist? BFS is best here. 
function dfs(start, visited = new Set()) {

    console.log(start)

    visited.add(start);

    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {

        if (destination === 'BKK') {
            console.log("DFS found Bangkok")
            return;
        }
        if (!visited.has(destination)) {
            dfs(destination, visited);
        }
    }
}

dfs('PHX')
