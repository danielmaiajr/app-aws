import React from 'react';

import Container from '../components/Container/Container';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const OrgerPage = () => {
	const classes = useStyles();

	return (
		<Container styles={classes.root}>
			<Typography variant="h2">Pedidos</Typography>
		</Container>
	);
};

export default OrgerPage;

const useStyles = makeStyles(() => ({
	root: {
		margin: '110px 0'
	}
}));
