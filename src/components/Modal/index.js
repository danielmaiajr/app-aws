import React from 'react';
import { createPortal } from 'react-dom';
import useMeasure from 'react-use-measure';

import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { useTransition, animated } from '@react-spring/web';

export default function Modal({ children, isOpen, OnClose }) {
	const classes = useStyles();
	const [ ref, { height } ] = useMeasure();

	const transitions = useTransition(isOpen, {
		from: { opacity: 0, y: height },
		enter: { opacity: 1, y: 100 },
		leave: { opacity: 0, y: height },
		reverse: isOpen,
		config: {
			clamp: true
		}
	});

	return createPortal(
		transitions(({ opacity, y }, item) => (
			<div className={classes.container} ref={ref} style={{ visibility: item ? 'visible' : 'hidden' }}>
				{item && (
					<React.Fragment>
						<animated.div style={{ y }} className={classes.modalContainer}>
							<div className={classes.title}>
								<span>ENDEREÇOS</span>
								<CloseIcon className={classes.icon} onClick={() => OnClose()} />
							</div>
							{children}
						</animated.div>
						<animated.div style={{ opacity }} className={classes.backGround} onClick={() => OnClose()} />
					</React.Fragment>
				)}
			</div>
		)),
		document.getElementById('modal-root')
	);
}

const useStyles = makeStyles((theme) => ({
	container: {
		position: 'fixed',
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		inset: 0,
		zIndex: 200
	},
	backGround: {
		position: 'fixed',
		inset: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.6)'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		padding: '25px 20px',
		borderBottom: '1px solid #CCC',
		fontSize: 14
	},
	icon: {
		cursor: 'pointer'
	},
	modalContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		maxWidth: '100%',
		zIndex: 200,
		backgroundColor: '#FFF',
		borderRadius: 4,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			minHeight: '100%'
		}
	}
}));
