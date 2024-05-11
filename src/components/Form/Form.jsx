import styles from './Form.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer, useRef } from 'react';
import Input from '../Input/Input';
import { IS_VALID_FORM } from '../../constants/constants';
import { formReducer } from './Form.state';

function Form({
	name,
	textButton,
	classNameFrom,
	classNameButton,
	placeholder,
	icon,
	onSubmit,
	loginedUser
}) {
	const [formState, dispatchForm] = useReducer(formReducer, IS_VALID_FORM);

	const { isValid, value, isReadyToSubmit } = formState;
	const buttonRef = useRef();
	const inputRef = useRef();

	const focusError = (isValid) => {
		if (!isValid) {
			inputRef.current.focus();
		}
	};

	useEffect(() => {
		let timerId;
		focusError(isValid);
		if (!isValid) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2500);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isReadyToSubmit) {
			onSubmit(value);
			loginedUser(value);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isReadyToSubmit, loginedUser, onSubmit, value]);

	function searchInput(event) {
		event.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	}

	const onChange = (event) => {
		dispatchForm({ type: 'SET_VALUE', payload: event.target.value });
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
			<Button
				ref={buttonRef}
				text={textButton}
				className={classNameButton}
			/>
		</form>
	);
}

export default Form;
