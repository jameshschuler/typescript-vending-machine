import React from 'react';
import ControlPanel from './ControlPanel';
import ItemsView from './ItemsView';

const VendingMachine: React.FC = () => {
	return (
		<div id='vending-machine'>
			<div id='top'>
				<ItemsView />
				<ControlPanel />
			</div>
			<div id='bottom'>
				<div id='dispenser'>
					<h3>Push</h3>
				</div>
			</div>
			<div id='left-foot' className='foot'></div>
			<div id='right-foot' className='foot'></div>
		</div>
	);
};

export default VendingMachine;
