import { Action } from '../models/Action';
import { ActionType } from '../models/constants/ActionType';
import { GlobalState } from '../models/GlobalState';

export default (state: GlobalState, action: Action): GlobalState => {
	switch (action.type) {
		case ActionType.ALERT:
			return {
				...state,
				message: action.payload.message,
			};
		case ActionType.PROCESS_TRANSACTION:
			return {
				...state,
				totalMoney: action.payload.updatedTotalMoney,
				purchasedItems: action.payload.purchasedItems,
				message: action.payload.message,
			};
		case ActionType.UPDATE_TOTAL_MONEY:
			return {
				...state,
				totalMoney: action.payload.updatedTotalMoney,
			};
		default:
			return state;
	}
};
