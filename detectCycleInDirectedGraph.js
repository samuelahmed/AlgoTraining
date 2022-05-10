// Leetcode 207 example course scheduler
// start with DFS and turn input into adjcency list


//true - NO CYCLE
numCourses = 2, preRequisitesTrue = [[1,0]] 

//false - THERE IS CYCLE (CANNOT FINISH ALL COURSES)
numCourses = 2, preRequisitesFalse = [[1,0], [0,1]]

// 0: [1]
// 1: [0]


// build ajacency list 
const buildAdjecencyList = (n, edges) => {
    const adjecencyList = Array.from({length: n}, () => []);

    for(let edge in edges) {
        let [source, destination] = edge;
        adjecencyList[source].push(destination);
    }
    return adjecencyList;
};

//build DFS traversal 

const hasCycleDFS = (node, adjecencyList, visited, arrive, depart) => {
    arrive[node] += 1;
    visited[node] = true;
    for(let neighbor of adjecencyList[node]) {
        if(!visited[neighbor]) {
            visited[neighbor] = true;
            
            if(hasCycleDFS(neighbor, adjecencyList, visited, arrive, depart)) return true;
        } else {
            //checking backedge
            if(depart[neighbor] === 0) return true; 
        }
    }
    depart[node] += 1;
    return false;
};


const canFinish = (numCourses, preRequisites) => {
    const adjecencyList = buildAdjecencyList(numCourses, preRequisites);
    const visited = {};
    const arrive = Array.from({length: numCourses}, () => 0);
    const depart = Array.from({length: numCourses}, () => 0);

    for(let vertex = 0; vertex < adjecencyList.length; vertex += 1) {
        if(!visited[vertex]) {
            if(hasCycleDFS(vertex, adjecencyList, visited, arrive, depart)) return false;
        }
    }
    return true; 
};

console.log(canFinish(preRequisitesTrue))




// ATTEMPT #2 something went wrong 
// THIS WORKS NOW BUT SOMETHING IS DIFF FROM ATTEMPT ABOVE - FIGURE IT OUT!!!!!

const buildAdjList = (n, edges) => {
    const adjList = Array.from({length: n}, () => []);

    for(let edge of edges) {
        let [src, dest] = edge;
        adjList[src].push(dest);
    }
    return adjList;
}

const hasCycleDFS = (node, adjList, visited, arrive, depart) => {
    arrive[node] += 1;
    visited[node] = true;

    for(let neighbor of adjList[node]){
        if(!visited[neighbor]) {
            visited[neighbor] = true

            if(hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true; 
        } else {
            if(depart[neighbor] === 0) return true;
        }
    }
    depart[node] += 1;
    return false;
}

var canFinish = (numCourses, prerequisites) => {
    const adjList = buildAdjList(numCourses, prerequisites);
    const visited = {};
    const arrive = Array.from({length: numCourses}, () => 0);
    const depart = Array.from({length: numCourses}, () => 0);

    for(let vertex = 0; vertex < adjList.length; vertex += 1){
        if(!visited[vertex]){
            if(hasCycleDFS(vertex, adjList, visited, arrive, depart)) return false;
        }
    }
    return true; 
}