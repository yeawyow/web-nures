import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem, ListItemText, Button, AppBar, Toolbar } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { NavLink, useHistory } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	grow: { flexGrow: 1 },
	menuButton: {
		marginRight: theme.spacing(10)
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},

	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: `white`,
		fontSize: 18,
		margin: theme.spacing(3)
	}
}));

function NavBar() {
	const classes = useStyles();
	const history = useHistory();
	const menuId = 'primary-search-account-menu';
	const [ isMenuOpen, setisMenuOpen ] = useState(false);
	const [ isMobileMenuOpent, setisMobileMenuOpent ] = useState(1);

	const renderMenu = (
		<Menu
			anchorEl={isMenuOpen}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			// onClose={handleMenuClose}
		>
			<MenuItem
			// onClick={this.handleMenuClose}
			>
				Profile
			</MenuItem>
			<MenuItem
			// onClick={this.handleMenuClose}
			>
				My account
			</MenuItem>
		</Menu>
	);
	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			// anchorEl={this.state.mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			// open={isMobileMenuOpen}
			// onClose={this.handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label="show 11 new notifications" color="inherit">
					<Badge badgeContent={11} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem
			// onClick={this.handleProfileMenuOpen}
			>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);
	const navLinks = [
		{ title: `หน้าหลัก`, path: `/` },
		{ title: `ข้อมูลหน่วยงาน`, path: `/about` },
		{ title: `ภาพกิจกรรม`, path: `/` },
		{ title: `บุคลากร`, path: `/blog` },
		{ title: `ดาวน์โหลดเอกสาร`, path: `/contact` },
		{ title: `faq`, path: `/faq` }
	];
	const handleMobileMenuOpen = () => {
		setisMobileMenuOpent(isMobileMenuOpent + 1);
	};
	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						{navLinks.map(({ title, path }) => (
							<Button
								onClick={() => history.push(`${process.env.PUBLIC_URL}` + `${path}`)}
								className={classes.linkText}
								color="primary"
							>
								{title}
							</Button>
						))}
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
					</div>
					<Button onClick={handleMobileMenuOpen}>66</Button>
					555:{isMobileMenuOpent}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default NavBar;
