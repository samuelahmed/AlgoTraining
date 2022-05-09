// Leetcode 207 example course scheduler
// start with DFS and turn input into adjcency list


//true - NO CYCLE
numCourses = 2, preRequisites = [[1,0]] 

//false - THERE IS CYCLE (CANNOT FINISH ALL COURSES)
numCourses = 2, preRequisites = [[1,0], [0,1]]

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

const hasCycleDFS = (node, adjecencyList, visited, arrive, depart)


const canFinish = (numCourses, preRequisites) => {

};