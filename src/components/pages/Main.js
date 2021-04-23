import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Container, Toolbar, Typography } from '@material-ui/core';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'static',
		marginLeft: 10,
		display: 'grid',
		marginTop: 20,
		padding: 20
	},
	headTitle: {
		color: 'green',
		margin: 0
	},
	rightBar: {
		backgroundColor: 'red'
	},
	card: {
		width: 300,
		height: 300
	},
	media: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%'
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	}
}));
export default function Main() {
	const classes = useStyles();
	const [ expanded, setExpanded ] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={8}>
					<h2 className={classes.headTitle}>ข่าวประชาสัมพันธ์</h2>
				</Grid>
				<Grid className={classes.rightBar} item xs={12} sm={4}>
					<h2 className={classes.headTitle}>หัวหน้าฝ่าย</h2>
					<Card className={classes.card}>
						<CardMedia className={classes.media}>
							<img src={`${process.env.PUBLIC_URL}/images/main/test.jpg`} />
						</CardMedia>

						<CardContent>
							<p>นางสาวรุจิรา งิ้วโสม</p>

							<p>พยาบาลวิชาชีพชำนาญการ</p>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
