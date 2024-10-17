import { BaseNode } from './BaseNode';

// ConditionalNode.js
export const ConditionalNode = ({ id, data }) => (
    <BaseNode
      id={id}
      data={data}
      label="Conditional"
      inputs={[{ position: 'Left', id: 'condition' }]}
      outputs={[{ position: 'Right', id: 'output' }]}
      renderContent={() => <span>If-Else Logic.</span>}
    />
  );
  