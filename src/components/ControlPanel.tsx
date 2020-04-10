import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ControlPanel: React.FC = () => {
  const [codes, setCodes] = useState<string[]>([]);
  const [inputSequence, setInputSequence] = useState('');

  const { processTransaction } = useContext(GlobalContext);

  useEffect(() => {
    setCodes(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2']);
  }, []);

  useEffect(() => {
    if (inputSequence.length === 2) {
      if (!inputSequence.match(/^[A-Z][0-9]$/)) {
        setInputSequence('');
        return;
      }

      processTransaction(inputSequence);
    }
  }, [inputSequence]);

  const clearInput = () => setInputSequence('');

  const inputPressed = (code: string) => {
    if (inputSequence.length === 2) {
      setInputSequence(code);
    } else {
      setInputSequence(`${inputSequence}${code}`);
    }
  };

  return (
    <div id="control-panel">
      <div id="screen">
        <span id="screen-text">{inputSequence}</span>
      </div>
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
        <span className="input-button long" onClick={() => clearInput()}>
          Clear
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;
