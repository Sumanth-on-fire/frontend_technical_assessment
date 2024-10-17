import { BaseNode } from './BaseNode';

// DelayNode.js
export const DelayNode = ({ id, data }) => (
    <BaseNode
      id={id}
      data={data}
      label="Delay"
      inputs={[{ position: 'Left', id: 'input' }]}
      outputs={[{ position: 'Right', id: 'output' }]}
      renderContent={() => <span>Delays output by a set time.</span>}
    />
  );
  