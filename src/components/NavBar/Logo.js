import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function Logo() {
	const classes = useStyles();

	return (
		<Link to="/">
			<div className={classes.title}>MERKATHO</div>
			<div className={classes.subtitle}>ONLINE</div>
		</Link>
	);
}

const useStyles = makeStyles({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#5A5353',
		lineHeight: '22px'
	},
	subtitle: {
		fontSize: 8,
		fontWeight: 500,
		color: '#a6a5a5',
		textAlign: 'end'
	}
});
