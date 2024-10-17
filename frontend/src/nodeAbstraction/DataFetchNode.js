import { BaseNode } from './BaseNode';

// DataFetchNode.js
export const DataFetchNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    label="Data Fetch"
    inputs={[{ position: 'Left', id: 'request' }]}
    outputs={[{ position: 'Right', id: 'response' }]}
    renderContent={() => <span>Fetches data from an API.</span>}
  />
);
