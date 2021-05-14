import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function LeftContainer({ children, styles }) {
	const classes = useStyles();

	return <div className={`${classes.root} ${styles}`}>{children}</div>;
}

export default LeftContainer;

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 80,
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(0, 75),
		width: `calc(100% - 430px - ${theme.spacing(150)}px)`,
		[theme.breakpoints.down('lg')]: {
			padding: theme.spacing(0, 10),
			width: `calc(100% - 430px - ${theme.spacing(20)}px)`
		}
	}
}));
