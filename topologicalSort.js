//many real world situations can be modelled as a graph where some events must happen before others
// ex. prerequirements (for taking classes, or program-build-dependencies)
// A TOPOLOGICAL ORDERING IS AN ORDERING OF THE NODES IN A DIRECTED GRAPH 
// WHERE FOR EACH DIRECTED EDGE FROM NODE A TO NODE B, NODE A APPEARS BEFORE NODE B IN THE ORDERING 

// TIME O(v+e)

// topological orderings are NOT unique
// not every type of graph has topological odering any graph with a cycle cannot have valid ordering
// only graphs that have it are directed acyclic graphs (DAG) (graphs with DIRECTED EDGES AND NO CYCLES)
// to test if graph has no cycles you can use Tarjan's strongly connected component agorithm
// by def all rooted tress have a topological ordering (since theyhave no cycle) - start from leafs and find root

// PROCESS
// 1) begin with selected nod eand do a DFS to unvisted nodes
// 2) on recursive callback of the DFS add current nodes to the topological ordering in reverse order 

