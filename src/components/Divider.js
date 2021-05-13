import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const Divider = () => {
	const classes = useStyles();

	return <div className={classes.root} />;
};

export default Divider;

const useStyles = makeStyles({
	root: {
		width: 'calc(100% - 60px)',
		borderTop: '1px solid #E4E1E1',
		margin: '0 30px'
	}
});
