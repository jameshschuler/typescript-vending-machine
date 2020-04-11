import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { PurchasedItem } from '../models/PurchasedItem';

const PurchasedItems: React.FC = () => {
	const { purchasedItems } = useContext(GlobalContext);

	return (
		<div id='purchased-items-container'>
			<h3>Purchased Items</h3>
			<div id='purchased-items'>
				{purchasedItems &&
					purchasedItems.map((item: PurchasedItem) => {
						return (
							<div className='purchased-item' key={item.id}>
								<span>
									<i className={`fas fa-fw fa-2x ${item.icon}`}></i>
								</span>
								<span>
									<i className='fas fa-times fa-fw'></i>
								</span>
								<span className='quantity'>{item.quantity}</span>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default PurchasedItems;
