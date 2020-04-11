import React from 'react';

const MoneyMaker: React.FC = () => {
	const moneyIcons = ['fas fa-dollar-sign', 'fab fa-bitcoin'];

	const clickedPiggy = (e: any) => {
		e.stopPropagation();
		console.log('generating money!');
		//<i class="fas fa-dollar-sign"></i>
		// TODO: add falling icons (dollar sign and maybe coins) to money-maker div
		// increment total money by a random amount each click
		const randomValue = Math.random() * 5;
		console.log(randomValue.toFixed(2));

		const container = document.getElementById('icon-container');
		const icon = document.createElement('i');

		const iconClasses =
			moneyIcons[Math.floor(Math.random() * moneyIcons.length)];
		icon.classList.add(...iconClasses.split(' '), 'falling-icon');
		icon.style.left = `${Math.floor(Math.random() * 288)}px`;
		console.log('left value: ' + icon.style.left);

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
