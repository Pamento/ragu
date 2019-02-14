import * as types from '../constants/actionsType';

export const screen = () => { return { type: types.SCREEN } }
export const add_mail = (email) => { return { type: types.ADD_EMAIL, email } }
export const theme = (value) => { return { type: types.THEME, value } }
export const questions = (choice,datas) => {
	return {
		type: types.QUESTIONS,
		name: choice,
		datas
	}
}
export const show_loader = (show) => ({
	type: types.SHOW_LOADER,
	show: show
});
export const updateMailAndScreen = (email, screen) => {
	return (dispatch) => {
		dispatch(add_mail(email));
		dispatch(theme(screen));
	}
}
export const choiceItemDon = (choice, screen) => {
	return async (dispatch) => {
		dispatch(show_loader(true));
		let response;
		if (choice === 'html') { response = await fetch('https://quizz.simplon-roanne.com/html.json'); }
		else if (choice === 'js') { response = await fetch('https://quizz.simplon-roanne.com/js.json'); }
		else if (choice === 'php') { response = await fetch('https://quizz.simplon-roanne.com/php.json'); }
		const datas = await response.json();
		console.log('response pour_', choice,'_: ', datas);
		dispatch(questions(choice,datas));
		dispatch(show_loader(false));
		dispatch(theme(screen));
		return datas;
	}
}
export const valid_answer = (value) => {
	return {
		type: types.VALID_ANSWER, value
	}
}
// export const add_input = (value) => {
// 	console.log('add_input ',value);
// 	return {
// 		type: types.ADD_INPUT,
// 		value
// 	}
// };
// export const show_loader = (show) => ({
// 	type: types.SHOW_LOADER,
// 	show: show
// });
// export const upadate_counter = (value) => ({
// 	type: types.UPDATE_COUNTER,
// 	value
// });
// export const fetchNumber = (randNumber) => {
// 	console.log('fetchNumber');

// 	return async (dispatch) => {
// 		dispatch(show_loader(true));
// 		const response = await fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8');
// 		const datas = await response.json();
// 		console.log('response number ',datas.data[0]);
// 		dispatch(show_loader(false));
// 		dispatch(upadate_counter(datas.data[0]));
// 		return datas;
// 	}
// }
// export const total_plus_input = () => {
// 	return (dispatch) => {
// 		const chifre = document.querySelector('#myinput').value;
// 		console.log('input has ',chifre);

// 		dispatch(upadate_counter(parseInt(chifre)));
// 		return chifre;
// 	}
// }


/////////////////////////////////////////////////////////////
// api to fetch for questions
/////////////////////////////////////////////////////////////


/**
 * https://quizz.simplon-roanne.com/html.json
 * https://quizz.simplon-roanne.com/js.json
 * https://quizz.simplon-roanne.com/php.json
 */
