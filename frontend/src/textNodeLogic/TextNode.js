import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text"
      dynamicText={currText} // Enables dynamic text handling
      outputs={[{ position: 'Right', id: 'output' }]}
      renderContent={(id, data, handleTextChange) => (
        <div>
          <label>
            Text:
            <textarea
              value={currText}
              onChange={(e) => {
                setCurrText(e.target.value);
                handleTextChange(e.target.value); // Trigger dynamic resizing and handle creation
              }}
              style={{
                width: '100%',
                height: 'auto',
                resize: 'none',
                overflow: 'hidden',
              }}
            />
          </label>
        </div>
      )}
    />
  );
};
