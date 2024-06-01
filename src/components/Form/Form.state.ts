import { IS_VALID_FORM, ValidityForm } from '../../constants/constants';

export enum ActionType {
	RESET = 'RESET_VALIDITY',
	SUBMIT = 'SUBMIT',
	SET_VALUE = 'SET_VALUE',
	CLEAR = 'CLEAR'
}

type Action =
	| {
			type: ActionType.SET_VALUE;
			payload: string;
	  }
	| {
			type: ActionType.RESET;
			payload?: string;
	  }
	| {
			type: ActionType.SUBMIT;
			payload?: string;
	  }
	| {
			type: ActionType.CLEAR;
			payload?: string;
	  };

export function formReducer(state: ValidityForm, action: Action): ValidityForm {
	switch (action.type) {
		case ActionType.RESET:
			return { ...state, isValid: IS_VALID_FORM.isValid };
		case ActionType.SUBMIT: {
			const inputValidity = state?.value.trim().length;
			return {
				...state,
				isValid: inputValidity,
				isReadyToSubmit: inputValidity
			};
		}
		case ActionType.SET_VALUE:
			return { ...state, value: action.payload };
		case ActionType.CLEAR:
			return {
				...state,
				value: IS_VALID_FORM.value,
				isReadyToSubmit: false
			};
	}
}
