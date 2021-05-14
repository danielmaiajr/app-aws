import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function CenterContainer({ children, styles }) {
	const classes = useStyles();

	return <div className={`${classes.root} ${styles}`}>{children}</div>;
}

export default CenterContainer;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginTop: 140,
		[theme.breakpoints.down('lg')]: {
			marginTop: 80
		}
	}
}));
