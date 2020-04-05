import data from '../data/data.json';
import { InventoryItem } from '../models/InventoryItem';

const mergeData = (): InventoryItem[] => {
  const { inventory, items } = data;
  return items.map((item, i) => Object.assign({}, item, inventory[i]));
};

const mergedData: InventoryItem[] = mergeData();

export const getInventory = (): InventoryItem[] => mergedData;
