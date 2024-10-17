// OutputNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      data={data}
      label="Output"
      inputs={[{ position: 'Left', id: 'value' }]}
      renderContent={() => (
        <div>
          <label>
            Name:
            <input 
              type="text" 
              value={currName} 
              onChange={(e) => setCurrName(e.target.value)} 
            />
          </label>
          <label>
            Type:
            <select value={outputType} onChange={(e) => setOutputType(e.target.value)}>
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </label>
        </div>
      )}
    />
  );
};
