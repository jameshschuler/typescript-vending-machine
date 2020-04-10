import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ActionBar = () => {
  const { totalMoney } = useContext(GlobalContext);

  return (
    <div id="action-bar">
      <h3>Total Money: {`$${totalMoney.toFixed(2)}`}</h3>
    </div>
  );
};

export default ActionBar;
