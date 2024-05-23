import { IS_VALID_FORM, ValidityForm } from '../../constants/constants';

export enum ActionType {
	Reset = 'RESET_VALIDITY',
	Submit = 'SUBMIT',
	SetValue = 'SET_VALUE',
	Clear = 'CLEAR'
}

type Action =
	| {
			type: ActionType.SetValue;
			payload: string;
	  }
	| {
			type: ActionType.Reset;
			payload?: string;
	  }
	| {
			type: ActionType.Submit;
			payload?: string;
	  }
	| {
			type: ActionType.Clear;
			payload?: string;
	  };

export function formReducer(state: ValidityForm, action: Action): ValidityForm {
	switch (action.type) {
		case ActionType.Reset:
			return { ...state, isValid: IS_VALID_FORM.isValid };
		case ActionType.Submit: {
			const inputValidity = state?.value.trim().length;
			return {
				...state,
				isValid: inputValidity,
				isReadyToSubmit: inputValidity
			};
		}
		case ActionType.SetValue:
			return { ...state, value: action.payload };
		case ActionType.Clear:
			return {
				...state,
				value: IS_VALID_FORM.value,
				isReadyToSubmit: false
			};
	}
}
