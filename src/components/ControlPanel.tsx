import React, { useState } from 'react';

const ControlPanel: React.FC = () => {
  const [codes, setCodes] = useState([
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    '0',
    '1',
    '2'
  ]);
  const [inputSequence, setInputSequence] = useState('');

  const inputPressed = (code: string) => {
    console.log('clicked: ' + code);
  };

  return (
    <div id="control-panel">
      <div id="screen"></div>
      <div id="credit-card-reader"></div>
      <div id="item-code-input">
        {codes.map((code, index) => {
          return (
            <span
              className="input-button"
              key={index}
              onClick={() => inputPressed(code)}
            >
              {code}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ControlPanel;
