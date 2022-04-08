import React from 'react';
import './core/style/tailwind.css';
import './core/style/typefaces.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Trending from './pages/Trending';

const App = () => {
	return (
		<div className="flex-sc col w-full">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/trending" exact>
						<Trending />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
