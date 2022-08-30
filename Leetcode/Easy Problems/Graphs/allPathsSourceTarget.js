/*
797. All Paths From Source to Target

https://leetcode.com/problems/all-paths-from-source-to-target/
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

STEPS:

*/





const allPathsSourceTarget = (graph) => {

    let result = [];

    const dfs = (id, output) => {

        if (id === graph.length - 1) {
            result.push(output);
        }

        for (const num of graph[id]) {
            dfs(num, [...output, num]);
        }
    };
    dfs(0, [0]);

    return result;
};