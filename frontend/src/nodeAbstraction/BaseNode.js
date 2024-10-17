// BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  data = {},
  label,
  inputs = [],
  outputs = [],
  renderContent,
}) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      {inputs.map(({ position, id: inputId, top }) => (
        <Handle
          key={inputId}
          type="target"
          position={Position[position]}
          id={`${id}-${inputId}`}
          style={top ? { top: `${top}%` } : {}}
        />
      ))}
      
      <div>
        <span>{label}</span>
      </div>

      {renderContent && renderContent(id, data)}

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
