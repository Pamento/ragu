import * as types from '../constants/actionsType';

let INITIAL_STATE_EMAIL = {
	userEmail: '',
};

export default function(state = INITIAL_STATE_EMAIL, action){
	switch (action.type) {
		case types.ADD_EMAIL: 
			return {
				...state,
				userEmail: state.userEmail
			}
		default: 
			return state
	}
}