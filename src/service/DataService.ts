import { inventoryData } from '../data/InventoryData';
import { InventoryItem } from '../models/InventoryItem';

const data = inventoryData;

export const getInventory = (): InventoryItem[] => data;

export const getItemByCode = (code: string): InventoryItem | null => {
  const items = data.filter((i) => i.code === code);
  return items ? items[0] : null;
};
