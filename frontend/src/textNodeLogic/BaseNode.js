// BaseNode.js
import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  data = {},
  label,
  inputs = [],
  outputs = [],
  renderContent,
  dynamicText = null, // Enable dynamic text input functionality if passed
}) => {
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 80 });
  const [handles, setHandles] = useState([]);

  // Function to dynamically resize the node based on text input length
  const resizeNode = (text) => {
    const minWidth = 200;
    const minHeight = 80;
    const textLength = text.length;
    const newWidth = Math.max(minWidth, textLength * 7); // Adjust width dynamically
    const newHeight = Math.max(minHeight, Math.ceil(textLength / 20) * 40); // Adjust height based on lines

    setNodeSize({ width: newWidth, height: newHeight });
  };

  // Function to extract variables wrapped in {{ }}
  const extractVariables = (text) => {
    const variableRegex = /\{\{(\s*[a-zA-Z_$][a-zA-Z_$0-9]*\s*)\}\}/g;
    const variables = [];
    let match;
    while ((match = variableRegex.exec(text)) !== null) {
      variables.push(match[1].trim());
    }
    return variables;
  };

  // Create handles for each variable found in the text
  const createHandlesForVariables = (variables) => {
    const newHandles = variables.map((variable, index) => ({
      id: `var-${variable}`,
      position: 'Left',
      top: 30 + index * 20, // Adjust top position dynamically to prevent overlap
      label: variable,
    }));
    setHandles(newHandles);
  };

  // Handle text change for dynamic text input
  const handleTextChange = (newText) => {
    // Resize node dynamically based on text length
    resizeNode(newText);

    // Extract variables from the text
    const variables = extractVariables(newText);
    createHandlesForVariables(variables);
  };

  useEffect(() => {
    if (dynamicText) {
      // Initial setup for node size and handles based on initial text if dynamicText is enabled
      resizeNode(dynamicText);
      const initialVariables = extractVariables(dynamicText);
      createHandlesForVariables(initialVariables);
    }
  }, [dynamicText]);

  return (
    <div style={{ width: nodeSize.width, height: nodeSize.height, border: '1px solid black' }}>
      {inputs.map(({ position, id: inputId, top }) => (
        <Handle
          key={inputId}
          type="target"
          position={Position[position]}
          id={`${id}-${inputId}`}
          style={top ? { top: `${top}%` } : {}}
        />
      ))}

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position[handle.position]}
          id={`${id}-${handle.id}`}
          style={{ top: `${handle.top}%` }}
        />
      ))}

      <div>
        <span>{label}</span>
      </div>

      {renderContent && renderContent(id, data, handleTextChange)}

      {outputs.map(({ position, id: outputId }) => (
        <Handle
          key={outputId}
          type="source"
          position={Position[position]}
          id={`${id}-${outputId}`}
        />
      ))}
    </div>
  );
};
