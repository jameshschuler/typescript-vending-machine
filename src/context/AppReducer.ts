import { Action } from '../models/Action';
import { ActionType } from '../models/constants/ActionType';
import { GlobalState } from '../models/GlobalState';

export default (state: GlobalState, action: Action) => {
  switch (action.type) {
    case ActionType.PROCESS_TRANSACTION:
      console.log(action);
      return {
        ...state,
      };
    default:
      return state;
  }
};
