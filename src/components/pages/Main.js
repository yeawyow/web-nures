import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Container, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: 20
	},
	headTitle: {
		color: 'green',
		margin: 0
	},
	rightBar: {
		backgroundColor: '#fce4ec'
	},

	media: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
		justifyItems: 'center'
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
			<Toolbar>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={9}>
						<h2 className={classes.headTitle}>ข่าวประชาสัมพันธ์</h2>
					</Grid>
					<Grid className={classes.rightBar} item xs={12} sm={3}>
						<h3 className={classes.headTitle}>หัวหน้ากลุ่มการพยาบาล</h3>

						<img className={classes.media} src={`${process.env.PUBLIC_URL}/images/main/test.jpg`} />

						<Typography align="center">นางสาวรุจิรา งิ้วโสม</Typography>
						<Typography align="center">พยาบาลวิชาชีพชำนาญการ</Typography>
					</Grid>
					<Grid item xs={12} sm={9}>
						<h2 className={classes.headTitle}>รูปภาพกิจกรรม</h2>
					</Grid>
				</Grid>
			</Toolbar>
		</div>
	);
}
