import React from 'react';

import Order from '../components/Order';

import { Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { orders } from '../assets/data/orders';

const OrgerPage = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<Typography variant="h2">Pedidos</Typography>

			<Grid container spacing={6}>
				{orders.map((ord) => (
					<Grid item xs={12} sm={12} md={6} key={ord.id}>
						<Order order={ord} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default OrgerPage;

const useStyles = makeStyles(() => ({
	container: {
		marginTop: 110
	}
}));
