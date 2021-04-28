import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',

		padding: 20
	},
	imag: {
		padding: theme.spacing(1),

		maxWidth: 200,
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	}
}));
export default function Header() {
	const classes = useStyles();
	return (
		<div>
			<Container>
				<Grid container className={classes.root}>
					<Grid>
						<img className={classes.imag} src={`${process.env.PUBLIC_URL}/images/main/logo.png`} />
					</Grid>
					<Grid item md={9} xs={12}>
						<Typography variant="h4" component="h4" gutterBottom>
							กลุ่มการพยาบาล โรงพยาบาลอากาศอำนวย
						</Typography>
						<Typography>Nursing akatamnauy hospital</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
