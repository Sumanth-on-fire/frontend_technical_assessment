import { BaseNode } from './BaseNode';

// LogicNode.js
export const LogicNode = ({ id, data }) => (
    <BaseNode
      id={id}
      data={data}
      label="Logic"
      inputs={[{ position: 'Left', id: 'input1' }, { position: 'Left', id: 'input2' }]}
      outputs={[{ position: 'Right', id: 'result' }]}
      renderContent={() => <span>Performs logic operations.</span>}
    />
  );
  