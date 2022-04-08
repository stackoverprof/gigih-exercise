import React from 'react';
import './App.css';
import './core/style/tailwind.css';
import './core/style/typefaces.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Trending from './pages/Trending';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Navbar />
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
