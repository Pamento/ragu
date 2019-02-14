import * as types from '../constants/actionsType';

let INITIAL_STATE_QUESTIONS = {
	name: null,
  questions: null,
  courentQuestion: 0,
  score: 0,
	loader: false
};

export default function(state = INITIAL_STATE_QUESTIONS, action){
	switch (action.type) {
		case types.QUESTIONS: 
			return {
				...state,
				questions: action.datas,
				name: action.name
			}
		default: 
			return state
	}
}