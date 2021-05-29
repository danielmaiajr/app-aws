import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge';

import Menu from './Menu';

export default function Profile() {
	const classes = useStyles();

	const [ show, setShow ] = useState(false);

	return (
		<div className={classes.root}>
			<Person fontSize="inherit" color="secondary" className={classes.icon} onClick={() => setShow(!show)} />
			<Link to="/">
				<StyledBadge color="secondary" badgeContent={1}>
					<ShoppingBasketIcon fontSize="inherit" color="secondary" className={classes.shopIcon} />
				</StyledBadge>
			</Link>
			<Menu setShow={setShow} show={show} />
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		position: 'relative'
	},
	icon: {
		fontSize: 28,
		'&:hover': {
			cursor: 'pointer'
		}
	},
	shopIcon: {
		fontSize: 23,
		marginLeft: 20
	}
});

const StyledBadge = withStyles(() => ({
	badge: {
		fontSize: 9,
		minWidth: 15,
		height: 15,
		padding: '0 3px'
	}
}))(Badge);
