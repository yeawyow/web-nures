import React from 'react';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NureStruct from '../fragments/NureStruct';
import Visions from '../fragments/Visions';
import { Container, Toolbar } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 20
	}
}));
const About = () => {
	const history = useHistory();
	const classes = useStyles();
	const { url, path } = useRouteMatch();
	return (
		<div className={classes.root}>
			<Toolbar>
				<ButtonGroup variant="text" color="secondary" aria-label="text dark button group">
					<Button onClick={() => history.push(`${url}/vision`)}>วิสัยทัศน์ พันธกิจ</Button>
					<Button onClick={() => history.push(`${url}/nurseStruct`)}>โครงสร้างฝ่ายงาน</Button>
				</ButtonGroup>
			</Toolbar>
			<Container maxWidth="sm">
				<Route exact path={`${path}/`} component={Visions} />
				<Route exact path={`${path}/vision`} component={Visions} />
				<Route exact path={`${path}/nurseStruct`} component={NureStruct} />
			</Container>
		</div>
	);
};
export default About;
