import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 10
	},
	media: {
		height: 100
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function Login() {
	const classes = useStyles();

	return (
		<Grid container spacing={0} alignItems="center" justify="center">
			<Grid item xs={6}>
				<Card className={classes.root}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							เข้าสู่ระบบ
						</Typography>

						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="ชื่อผู้ใช้งาน"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="passwordjwt"
							autoComplete="current-password"
						/>
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							ตกลง
						</Button>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
