import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerContainer: {
		overflow: 'auto'
	}
}));
export default function MenuLeft() {
	const classes = useStyles();

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<Toolbar />
			<div className={classes.drawerContainer}>
				<List>
					<Button onClick={() => props.history.push('/register')} fullWidth size="small" color="primary">
						Register
					</Button>
				</List>
				<Divider />
				<List>
					{[ 'All mail', 'Trash', 'Spam' ].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		</Drawer>
	);
}
