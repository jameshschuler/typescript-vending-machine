import React from 'react';

const MoneyMaker: React.FC = () => {
	const clickedPiggy = (e: any) => {
		e.stopPropagation();
		console.log('generating money!');
		//<i class="fas fa-dollar-sign"></i>
		// TODO: add falling icons (dollar sign and maybe coins) to money-maker div
		// increment total money by a random amount each click
	};

	return (
		<div id='money-maker'>
			<span onClick={(e) => clickedPiggy(e)}>
				<i className='fas fa-fw fa-piggy-bank fa-7x'></i>
			</span>
		</div>
	);
};

export default MoneyMaker;
