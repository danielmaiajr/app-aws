import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

import Menu from './Menu';

export default function Profile() {
	const classes = useStyles();

	const [ show, setShow ] = useState(false);

	return (
		<div className={classes.root}>
			<PersonIcon fontSize="inherit" color="secondary" className={classes.icon} onClick={() => setShow(!show)} />
			{show ? <div className={classes.background} onClick={() => setShow(!show)} /> : null}
			{show ? <Menu /> : null}
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		display: 'flex',
		position: 'relative'
	},
	background: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh'
	},
	icon: {
		fontSize: 32,
		'&:hover': {
			cursor: 'pointer'
		}
	}
});
