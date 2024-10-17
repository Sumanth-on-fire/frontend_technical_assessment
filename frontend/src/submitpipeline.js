import axios from 'axios';

export const submitPipeline = async (nodes, edges) => {
  try {
    // Sending the pipeline data to the backend
    const response = await axios.post('http://127.0.0.1:8000/pipelines/parse', {
      nodes: nodes.map(node => ({
        id: node.id,
        data: node.data // Sending the node's data along with its id
      })),
      edges: edges.map(edge => ({
        source: edge.source,
        target: edge.target
      }))
    });

    // Handle the response from the backend
    const { num_nodes, num_edges, is_dag } = response.data;

    // Create a user-friendly alert with the results
    alert(`Pipeline Info:\n- Number of Nodes: ${num_nodes}\n- Number of Edges: ${num_edges}\n- Is DAG: ${is_dag ? 'Yes' : 'No'}`);
  } catch (error) {
    console.error('Error submitting pipeline:', error);
    alert('Failed to submit the pipeline. Please try again.');
  }
};
