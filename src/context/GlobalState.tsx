import React, { createContext, useReducer } from 'react';
import { ActionType } from '../models/constants/ActionType';
import { GlobalState } from '../models/GlobalState';
import { getItemByCode } from '../service/DataService';
import AppReducer from './AppReducer';

const initialState: GlobalState = {
  totalMoney: 10.0,
  processTransaction: (code: string) => {},
};

export const GlobalContext = createContext(initialState);

interface GlobalProviderProps {
  children: any;
}

// Provider component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions:
  const processTransaction = (code: string): void => {
    const item = getItemByCode(code);

    console.log(item);

    if (item) {
      // TODO:
    }

    dispatch({
      type: ActionType.PROCESS_TRANSACTION,
      payload: {
        code,
      },
    });
  };

  return (
    <GlobalContext.Provider
      value={{ totalMoney: state.totalMoney, processTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
