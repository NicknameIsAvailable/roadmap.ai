"use client";

import { Card } from "@workspace/ui/components/card";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Node,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import { useCallback, useState } from "react";
import { nodeTypes } from "./node-types";

const initialNodes: Node[] = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  {
    id: "n2",
    type: "prompt",
    position: { x: 0, y: 100 },
    data: { label: "Node 2" },
  },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

export default function RoadmapFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  return (
    <ReactFlowProvider>
      <Card className="w-full h-full p-0">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background variant="dots" className="rounded-2xl" />
        </ReactFlow>
      </Card>
    </ReactFlowProvider>
  );
}
