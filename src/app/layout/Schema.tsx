import React, { useEffect, useState } from 'react';
import ReactFlow, { addEdge, MiniMap, removeElements } from 'react-flow-renderer';
import Nodes from '../../graph.json';

const onLoad = (reactFlowInstance: any) => reactFlowInstance.fitView();

interface Props {}

const Schema = (props: Props) => {
  const [nodes, setNodes] = useState([] as any[]);

  useEffect(() => {
    const localNodes = [] as any[];
    Nodes.nodes.forEach((node, index) =>
      localNodes.push({
        id: node.id,
        data: {
          label: (
            <div className="node-body">
              <span>{node.logicalId}</span>
              <span>{node.resourceType}</span>
            </div>
          )
        },
        position: { x: (index + 1) * 100, y: (index + 1) * 100 }
      })
    );
    Nodes.edges.forEach((edge) => {
      localNodes.push({
        id: edge.id,
        type: 'animated edge',
        source: edge.source,
        target: edge.target,
        label: edge.referenceType
      });
    });
    setNodes(localNodes);
  }, []);

  const onElementsRemove = (elementsToRemove: any) => setNodes((els: any) => removeElements(elementsToRemove, els));
  const onConnect = (params: any) => setNodes((els) => addEdge(params, els));
  return (
    <ReactFlow
      elements={nodes as any[]}
      onLoad={onLoad}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      snapToGrid={true}
      snapGrid={[15, 15]}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background as string;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';
          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background as string;
          return '#fff' as string;
        }}
        nodeBorderRadius={2}
      />
    </ReactFlow>
  );
};

export default Schema;
