import { Roadmap } from "@workspace/protos/model/roadmap";
import { Edge, Node, XYPosition } from "@xyflow/react";
import dagre from "dagre";

interface RoadmapNode extends Omit<Node, "data"> {
    data: Roadmap
}

export function roadmapToNode(schema: Roadmap, position: XYPosition): RoadmapNode {
    return {
        data: schema,
        id: schema.id,
        position
    }
}

const nodeWidth = 200;
const nodeHeight = 100;

export function autoLayout<RoadmapNode>(
  nodes: RoadmapNode[],
  edges: Edge[]
): RoadmapNode[] {
  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir: "LR", marginx: 50, marginy: 50 });
  g.setDefaultEdgeLabel(() => ({}));

  // добавляем ноды в граф
  nodes.forEach((node) => {
    g.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  // добавляем рёбра
  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  dagre.layout(g);

  // обновляем позиции нод
  return nodes.map((node) => {
    const nodeWithPosition = g.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });
}