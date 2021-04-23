import React from 'react';
import Header from './components/fragments/Header';
import Main from './components/pages/Main';
import { createMuiTheme, ThemeProvider, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import About from './components/pages/About';
import NavBar from './components/fragments/Navbar';

const useStyle = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	}
}));
export default function App() {
	const theme = createMuiTheme({
		palette: {
			primary: {
				500: '#f73378'
			}
		}
	});

	return (
		<div>
			<Router>
				<ThemeProvider theme={theme}>
					<Header />
					<NavBar />
					<Switch>
						<Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
						<Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
						<Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
					</Switch>
				</ThemeProvider>
			</Router>
		</div>
	);
}
