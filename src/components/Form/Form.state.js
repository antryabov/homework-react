import { IS_VALID_FORM } from '../../constants/constants';

export function formReducer(state, action) {
	switch (action.type) {
		case 'RESET_VALIDITY':
			return { ...state, isValid: IS_VALID_FORM.isValid };
		case 'SUBMIT': {
			const inputValidity = state?.value.trim().length;
			return {
				...state,
				isValid: inputValidity,
				isReadyToSubmit: inputValidity
			};
		}
		case 'SET_VALUE':
			return { ...state, value: action.payload };
		case 'CLEAR':
			return {
				...state,
				value: IS_VALID_FORM.value,
				isReadyToSubmit: false
			};
	}
}
