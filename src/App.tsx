import React from 'react';

function App() {
  return (
    <div id="container">
      <div id="vending-machine">
        <div id="top">
          <div id="items">
            <div className="item-row">
              <div className="item">
                <h5 className="item-name">Test</h5>
                <div className="item-information">
                  <span>A0</span>
                  <span>$2.00</span>
                </div>
              </div>
            </div>
          </div>
          <div id="control-panel">Controls</div>
        </div>
        <div id="bottom">Bottom</div>
        <div id="left-foot" className="foot"></div>
        <div id="right-foot" className="foot"></div>
      </div>
    </div>
  );
}

export default App;
