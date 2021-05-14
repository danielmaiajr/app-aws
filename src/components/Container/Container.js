import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Container({ children, styles }) {
	const classes = useStyles();

	return <div className={`${classes.root} ${styles}`}>{children}</div>;
}

export default Container;

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '0 300px',
		width: 'calc(100% - 600px)',
		[theme.breakpoints.down('lg')]: {
			padding: '0 40px',
			width: 'calc(100% - 80px)'
		}
	}
}));
