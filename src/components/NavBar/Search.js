import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import SearchDropDown from './SearchDropDown';

export default function Search() {
	const classes = useStyles();

	const [ show, setShow ] = useState(false);

	const HandleOnChange = (e) => {
		console.log(e.target.value.length);
		e.preventDefault();
		e.target.value.length >= 1 ? setShow(true) : setShow(false);
	};

	return (
		<div className={classes.root}>
			<IconButton type="submit" className={classes.iconButton} aria-label="search">
				<SearchIcon />
			</IconButton>
			<InputBase
				className={classes.input}
				placeholder="Busque por produto"
				name="search"
				onChange={(e) => HandleOnChange(e)}
			/>
			{show ? <SearchDropDown /> : null}
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		position: 'relative',
		backgroundColor: theme.palette.background.default,
		borderRadius: 8,
		width: 420
	},
	iconButton: {
		marginLeft: theme.spacing(1),
		color: '#EA1D2C',
		'&:hover': {
			backgroundColor: theme.palette.background.default
		}
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1
	}
}));
