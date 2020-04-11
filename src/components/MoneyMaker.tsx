import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MoneyMaker: React.FC = () => {
	const moneyIcons = [
		'fas fa-dollar-sign',
		'fab fa-bitcoin',
		'fas fa-yen-sign',
		'fas fa-euro-sign',
		'fas fa-pound-sign',
		'fas fa-won-sign',
	];

	const { updateTotalMoney } = useContext(GlobalContext);

	const clickedPiggy = (e: any) => {
		e.stopPropagation();
		updateTotalMoney(Math.random() * 1);

		const container = document.getElementById('icon-container');
		const icon = document.createElement('i');

		const iconClasses =
			moneyIcons[Math.floor(Math.random() * moneyIcons.length)];

		icon.classList.add(...iconClasses.split(' '), 'falling-icon');
		icon.style.left = `${Math.floor(Math.random() * 288)}px`;

		container?.appendChild(icon);
	};

	return (
		<div id='money-maker'>
			<span onClick={(e) => clickedPiggy(e)}>
				<i className='fas fa-fw fa-piggy-bank fa-7x'></i>
			</span>
			<div id='icon-container'></div>
		</div>
	);
};

export default MoneyMaker;
