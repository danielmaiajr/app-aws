import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './pages/HomePage';
// import Address from './components/Address';
// import AddAddress from './components/AddAddress';
// import PersonalData from './components/PersonalData';
// import Menu from './components/Menu';

/* import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// imports from Amplify library
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

// import query definition
import { listTalks as ListTalks } from './graphql/queries';
import { createTalk as CreateTalk } from './graphql/mutations';
import { onCreateTalk as OnCreateTalk } from './graphql/subscriptions';

const CLIENT_ID = uuidv4();

const initialState = {
	name: '',
	description: '',
	speakerName: '',
	speakerBio: '',
	talks: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_TALKS':
			return { ...state, talks: action.talks };
		case 'SET_INPUT':
			return { ...state, [action.key]: action.value };
		case 'CLEAR_INPUT':
			return { ...initialState, talks: state.talks };
		case 'ADD_TALK':
			return { ...initialState, talks: [ ...state.talks, action.talk ] };
		default:
			return state;
	}
};

const App = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		const subscriber = API.graphql(graphqlOperation(OnCreateTalk)).subscribe({
			next: (eventData) => {
				const talk = eventData.value.data.onCreateTalk;
				if (CLIENT_ID === talk.clientId) return;
				dispatch({ type: 'ADD_TALK', talk });
			}
		});
		return () => subscriber.unsubscribe();
	}, []);

	const getData = async () => {
		try {
			const talkData = await API.graphql(graphqlOperation(ListTalks));
			console.log('talkData:', talkData);
			dispatch({ type: 'SET_TALKS', talks: talkData.data.listTalks.items });
		} catch (err) {
			console.log('error fetching talks...', err);
		}
	};

	const createTalk = async () => {
		const { name, description, speakerBio, speakerName } = state;
		if (name === '' || description === '' || speakerBio === '' || speakerName === '') return;

		const talk = { name, description, speakerBio, speakerName, clientId: CLIENT_ID };
		const talks = [ ...state.talks, talk ];
		dispatch({ type: 'SET_TALKS', talks });
		dispatch({ type: 'CLEAR_INPUT' });

		try {
			await API.graphql(graphqlOperation(CreateTalk, { input: talk }));
			console.log('item created!');
		} catch (err) {
			console.log('error creating talk...', err);
		}
	};

	const onChange = (event) => {
		dispatch({ type: 'SET_INPUT', key: event.target.name, value: event.target.value });
	};

	return (
		<AmplifyAuthenticator>
			<input name="name" onChange={onChange} value={state.name} placeholder="name" />
			<input name="description" onChange={onChange} value={state.description} placeholder="description" />
			<input name="speakerName" onChange={onChange} value={state.speakerName} placeholder="speakerName" />
			<input name="speakerBio" onChange={onChange} value={state.speakerBio} placeholder="speakerBio" />
			<button onClick={createTalk}>Create Talk</button>
			{state.talks.map((talk, index) => (
				<div key={index}>
					<h3>{talk.speakerName}</h3>
					<h5>{talk.name}</h5>
					<p>{talk.description}</p>
				</div>
			))}
			<AmplifySignOut />
		</AmplifyAuthenticator>
	);
};
 */

const App = (props) => {
	return (
		<AmplifyAuthenticator>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<HomePage />
				{/* <Address /> */}
				{/* <AddAddress
				address={{
					address_id: uuidv4(),
					neightborhood: 'Lagoa',
					street: 'Avenida Jose Carlos Paes',
					num: '600',
					cep: '27930800'
				}}
			/> */}
				{/* <PersonalData /> */}
				{/* <Menu /> */}
			</ThemeProvider>
		</AmplifyAuthenticator>
	);
};

export default App;

const theme = createMuiTheme({
	palette: {
		background: {
			default: '#FFF'
		}
	}
});
