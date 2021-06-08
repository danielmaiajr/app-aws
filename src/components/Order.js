import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

export default function Order({ order }) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.date}>
				<span>
					<b>{order.day}</b>
				</span>
				<span>{order.month}</span>
			</div>
			<div>
				<div className={classes.orderNumber}>Pedido N° {order.id}</div>
				<div className={classes.orderQuantity}>{order.quantity}x Itens</div>
				<div className={classes.orderStatus}>Status: {order.status}</div>
			</div>
		</div>
	);
}

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		padding: '20px 0',
		border: '1px solid #DDD',
		borderRadius: 4,
		'&:hover': {
			border: '1px solid #BBB',
			cursor: 'pointer'
		}
	},
	date: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		margin: '0 30px',
		height: 54,
		width: 54,
		backgroundColor: '#F2F2F2'
	},
	orderNumber: {
		fontSize: 18,
		fontWeight: 400,
		color: '#3F3F3F'
	},
	orderQuantity: {
		fontSize: 14,
		color: '#717171'
	},
	orderStatus: {
		marginTop: 10,
		fontSize: 14,
		color: '#3F3F3F'
	}
}));
