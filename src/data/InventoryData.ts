import { InventoryItem } from '../models/InventoryItem';

export const inventoryData: InventoryItem[] = [
	{
		id: '1',
		code: 'A0',
		name: 'Air Freshener',
		icon: 'fa-air-freshener',
		price: 2.0,
		category: '',
		quantity: 10,
	},
	{
		id: '2',
		name: 'Bacon',
		code: 'A1',
		icon: 'fa-bacon',
		price: 0.99,
		category: '',
		quantity: 5,
	},
	{
		id: '3',
		name: 'Apple',
		code: 'A2',
		icon: 'fa-apple-alt',
		price: 2.5,
		category: '',
		quantity: 3,
	},
	{
		id: '4',
		code: 'A3',
		name: 'Beer',
		icon: 'fa-beer',
		price: 5.5,
		category: '',
		quantity: 2,
	},
];
