import React from 'react';
import Header from './components/fragments/Header';
import MenuLeft from './components/fragments/MenuLeft';
import Main from './components/pages/Main';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	}
}));

export default function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<CssBaseline />
			<MenuLeft />
			<Main />
		</div>
	);
}
