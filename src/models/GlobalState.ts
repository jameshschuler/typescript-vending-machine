import { PurchasedItem } from './PurchasedItem';

export interface GlobalState {
	message: string;
	purchasedItems: PurchasedItem[];
	totalMoney: number;
	processTransaction: (code: string) => any;
	updateTotalMoney: (value: number) => any;
}
