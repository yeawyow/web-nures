import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem, ListItemText, Container, AppBar, Toolbar } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	navbarDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`
	},
	navDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`,
		width: '100%'
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: `white`
	}
}));

const navLinks = [
	{ title: `ข้อมูลหน่วยงาน`, path: `/about` },
	{ title: `product`, path: `/` },
	{ title: `blog`, path: `/blog` },
	{ title: `contact`, path: `/contact` },
	{ title: `faq`, path: `/faq` }
];
function NavBar() {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Container maxWidth="md" className={classes.navbarDisplayFlex}>
					<IconButton edge="start" color="inherit" aria-label="home">
						<Home fontSize="large" />
					</IconButton>
					<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
						{navLinks.map(({ title, path }) => (
							<ListItem
								component={NavLink}
								button
								to={`${process.env.PUBLIC_URL}` + `${path}`}
								key={title}
							>
								<ListItemText primary={title} />
							</ListItem>
						))}
					</List>
				</Container>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
