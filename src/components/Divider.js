import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const Divider = () => {
	const classes = useStyles();

	return <div className={classes.root} />;
};

export default Divider;

const useStyles = makeStyles((theme) => ({
	root: {
		width: 'calc(100% - 60px)',
		borderTop: '1px solid',
		borderColor: theme.palette.divider,
		margin: '0 30px'
	}
}));
