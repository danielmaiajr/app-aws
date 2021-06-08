import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import car from '../../assets/images/1621022359424.png';

export default function Logo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Link to="/">
				<img src={car} alt="logo" className={classes.image} />
			</Link>
			{/* <Link to="/">
				<div className={classes.title}>MERKATHO</div>
				<div className={classes.subtitle}>ONLINE</div>
			</Link> */}
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center'
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#5A5353',
		lineHeight: '22px'
	},
	subtitle: {
		fontSize: 8,
		fontWeight: 500,
		color: '#5A5353',
		textAlign: 'end'
	},
	image: {
		height: 60,
		marginRight: 10
	}
});
