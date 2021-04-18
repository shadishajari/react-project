import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Map from "./components/Map";
import Login from "./components/Login";
import Home from "./components/Home";



class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/" component={Login} />
						<Route path="/login" component={Login} />
						<Route path="/map" component={Map} />
						<Route path="/home" component={Home} />

					</div>
				</Router>
			</div>
		);
	}
}

export default App;
