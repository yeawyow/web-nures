import React from 'react';
import Header from './components/fragments/Header';
import MenuLeft from './components/fragments/MenuLeft';
import Main from './components/pages/Main';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/pages/Login';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	}
}));

export default function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Router>
				<Header />
				<CssBaseline />

				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/login" component={Login} />
				</Switch>
				<MenuLeft />
			</Router>
		</div>
	);
}
