import React from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import NureStruct from '../fragments/NureStruct';
import Visions from '../fragments/Visions';
import { Container } from '@material-ui/core';

const About = () => {
	const { url, path } = useRouteMatch();
	return (
		<div>
			<h1>ข้อมูลหน่วยงาน</h1>
			<ul>
				<li>
					<Link to={`${url}/vision`}>วิสัยทัศน์ พันธกิจ</Link>
				</li>
				<li>
					<Link to={`${url}/nurseStruct`}>โครงสร้าง</Link>
				</li>
			</ul>
			<Route exact path={`${path}/vision`} component={Visions} />
			<Route exact path={`${path}/nurseStruct`} component={NureStruct} />
		</div>
	);
};
export default About;
