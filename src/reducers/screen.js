
import * as types from '../constants/actionsType';

let INITIAL_STATE_SCREEN = {
	theme: 0,
	count: 0,
	loader: false
};

export default function(state = INITIAL_STATE_SCREEN, action){
	switch (action.type) {
		case types.SCREEN: 
			return {
				...state,
				count: state.count + 1
			}
		case types.THEME:
			return {
				...state,
				theme: action.value
			}
		default: 
			return state
	}
}