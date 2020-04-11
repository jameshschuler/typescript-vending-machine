import React, { createContext, useReducer } from 'react';
import { ActionType } from '../models/constants/ActionType';
import { GlobalState } from '../models/GlobalState';
import { getItemByCode } from '../service/DataService';
import AppReducer from './AppReducer';

const initialState: GlobalState = {
	message: '',
	purchasedItems: [],
	totalMoney: 10.0,
	processTransaction: (code: string) => {},
};

export const GlobalContext = createContext(initialState);

interface GlobalProviderProps {
	children: any;
}

// Provider component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
	const [{ purchasedItems, message, totalMoney }, dispatch] = useReducer(
		AppReducer,
		initialState
	);

	// Actions:
	const processTransaction = (code: string): void => {
		const item = getItemByCode(code);

		if (!item) {
			return;
		}

		const { price, id, name, icon } = item;

		// Update total money
		const updatedTotalMoney = totalMoney - price;
		if (updatedTotalMoney < 0) {
			dispatch({
				type: ActionType.ALERT,
				payload: {
					message: 'Not enough money!',
				},
			});
			return;
		}

		// Update item quantity
		const updatedItemQuantity = item.quantity - 1;

		// Update user's purchased items
		let alreadyPurchasedItem = purchasedItems.find((i) => i.id === id);
		if (alreadyPurchasedItem) {
			alreadyPurchasedItem.quantity += 1;
		} else {
			alreadyPurchasedItem = {
				id,
				name,
				quantity: 1,
				icon,
			};
			purchasedItems.push(alreadyPurchasedItem);
		}

		dispatch({
			type: ActionType.PROCESS_TRANSACTION,
			payload: {
				updatedTotalMoney,
				updatedItemQuantity,
				purchasedItems,
			},
		});
	};

	return (
		<GlobalContext.Provider
			value={{ message, purchasedItems, totalMoney, processTransaction }}
		>
			{children}
		</GlobalContext.Provider>
	);
};
