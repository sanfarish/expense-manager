import React from 'react';
import notFound from './not-found.png'
import { NavLink } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

function NotFound() {

	return (
		<div
			style={{
				height: '100vh',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
		<NavLink to='/login'>
			<img  style={{width:200}}src={notFound} alt="" />
			<br/><ArrowLeftOutlined /> go back
		</NavLink>
		 </div>
	);
};

export default NotFound;