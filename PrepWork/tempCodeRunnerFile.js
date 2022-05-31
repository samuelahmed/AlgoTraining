    for (let node of graph.nodes) {
        console.log(`Node ${node.value}`)
        for (let connectedNode of node.edgesList) {
            console.log(`Node ${node.value} is connected to ${connectedNode.value}`)
        }
    }