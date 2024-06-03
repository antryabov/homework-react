import styles from './Form.module.css';
import Button from '../Button/Button';
import { ChangeEvent, FormEvent, useEffect, useReducer, useRef } from 'react';
import Input from '../Input/Input';
import { IS_VALID_FORM } from '../../constants/constants';

import { ActionType, formReducer } from './Form.state';

import { FormProps } from './Form.props';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { usersAction } from '../../store/users.slice';

function Form({
	name,
	textButton,
	classNameFrom,
	classNameButton,
	placeholder,
	icon,
	onSubmitForm
}: FormProps) {
	const [formState, dispatchForm] = useReducer(formReducer, IS_VALID_FORM);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const { isValid, value, isReadyToSubmit } = formState;

	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const focusError = (isValid: boolean) => {
		if (!isValid) {
			inputRef.current?.focus();
		}
	};

	useEffect(() => {
		let timerId: number | undefined;

		if (typeof isValid === 'boolean') {
			focusError(isValid);
		}

		if (!isValid) {
			timerId = setTimeout(() => {
				dispatchForm({ type: ActionType.RESET });
			}, 2500);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isReadyToSubmit) {
			if (name === 'login') {
				dispatch(
					usersAction.logined({
						login: value,
						isLogined: true
					})
				);

				navigate('/');
			}
			if (onSubmitForm !== undefined) {
				onSubmitForm(value);
			}

			dispatchForm({ type: ActionType.CLEAR });
		}
	}, [isReadyToSubmit, onSubmitForm, value, name, navigate, dispatch]);

	function searchInput(event: FormEvent) {
		event.preventDefault();
		dispatchForm({ type: ActionType.SUBMIT });
	}

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatchForm({
			type: ActionType.SET_VALUE,
			payload: event.target.value
		});
	};

	return (
		<form className={styles[classNameFrom]} onSubmit={searchInput}>
			{icon}
			<Input
				ref={inputRef}
				type="text"
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				isValid={isValid}
			/>
			<Button ref={buttonRef} className={classNameButton}>
				{textButton}
			</Button>
		</form>
	);
}

export default Form;
