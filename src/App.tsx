import React from 'react';
import ControlPanel from './components/ControlPanel';
import ItemsView from './components/ItemsView';

function App() {
  return (
    <div id="container">
      <div id="vending-machine">
        <div id="top">
          <ItemsView />
          <ControlPanel />
        </div>
        <div id="bottom">
          <div id="dispenser">
            <h3>Push</h3>
          </div>
        </div>
        <div id="left-foot" className="foot"></div>
        <div id="right-foot" className="foot"></div>
      </div>
    </div>
  );
}

export default App;
