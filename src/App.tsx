import React from 'react';
import ActionBar from './components/ActionBar';
import MoneyMaker from './components/MoneyMaker';
import PurchasedItems from './components/PurchasedItems';
import VendingMachine from './components/VendingMachine';
import { GlobalProvider } from './context/GlobalState';

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<GlobalProvider>
			<div id='container'>
				<ActionBar />
				<div id='vending-machine-container'>
					<VendingMachine />
					<div>
						<PurchasedItems />
						<MoneyMaker />
					</div>
				</div>
			</div>
		</GlobalProvider>
	);
};

export default App;
