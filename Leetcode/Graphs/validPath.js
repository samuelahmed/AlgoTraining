/*
1971. Find if Path Exists in Graph
https://leetcode.com/problems/find-if-path-exists-in-graph/


There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.


STEPS:



*/



const validPath = (n, edges, start, end) => {
    
    let graph = new Map();
    let visited = new Set();
    
    for (const [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        
        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }
        
    const dfs = (v) => {
        visited.add(v);    
        let edges = graph.get(v);   
        if (edges && edges.length > 0) {
            for (const e of edges) {
                if (!visited.has(e)) dfs(e);
            }
        }
    };
    dfs(start);
        
    return visited.has(end);
};