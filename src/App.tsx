import React from 'react';
import ActionBar from './components/ActionBar';
import ControlPanel from './components/ControlPanel';
import ItemsView from './components/ItemsView';
import { GlobalProvider } from './context/GlobalState';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <GlobalProvider>
      <div id="container">
        <ActionBar />
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
    </GlobalProvider>
  );
};

export default App;
