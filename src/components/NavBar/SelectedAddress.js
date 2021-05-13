import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function SelectedAddress() {
	const classes = useStyles();

	return (
		<Link to="/address">
			<div className={classes.title}>ENTREGAR EM</div>
			<div className={classes.subtitle}>Av. José Carlos Paes, 600</div>
		</Link>
	);
}

const useStyles = makeStyles({
	title: {
		fontSize: 11,
		fontWeight: 400,
		color: '#a6a5a5',
		lineHeight: '16px'
	},
	subtitle: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#5A5353'
	}
});
