import { inventoryData } from '../data/InventoryData';
import { InventoryItem } from '../models/InventoryItem';

const data = inventoryData;

export const getInventory = (): InventoryItem[] => data;

export const getItemByCode = (code: string): InventoryItem | undefined => {
	return data.find((i) => i.code === code);
};
