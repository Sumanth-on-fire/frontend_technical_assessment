// LLMNode.js
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      label="LLM"
      inputs={[
        { position: 'Left', id: 'system', top: 33 },
        { position: 'Left', id: 'prompt', top: 66 },
      ]}
      outputs={[{ position: 'Right', id: 'response' }]}
      renderContent={() => (
        <div>
          <span>This is a LLM.</span>
        </div>
      )}
    />
  );
};
