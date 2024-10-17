import React from 'react';
import { useStore } from './store';
import { submitPipeline } from './submitpipeline';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
  // Use Zustand's useStore hook to get the nodes and edges
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  // Trigger the submission of the pipeline
  const handleSubmit = () => {
    if (nodes.length === 0) {
      alert("Pipeline is empty, add nodes before submitting!");
      return;
    }
    submitPipeline(nodes, edges);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="submit" onClick={handleSubmit}>Submit Pipeline</button>
    </div>
  );
};
