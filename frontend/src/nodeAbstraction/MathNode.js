import { BaseNode } from './BaseNode';

// MathNode.js
export const MathNode = ({ id, data }) => (
    <BaseNode
      id={id}
      data={data}
      label="Math"
      inputs={[{ position: 'Left', id: 'input1' }, { position: 'Left', id: 'input2' }]}
      outputs={[{ position: 'Right', id: 'result' }]}
      renderContent={() => <span>Performs math operations.</span>}
    />
  );
  