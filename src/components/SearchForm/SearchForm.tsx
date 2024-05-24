import styles from './SearchForm.module.css';
import Button from '../Button/Button';
import { ChangeEvent, useEffect, useReducer, useRef } from 'react';
import Input from '../Input/Input';
import { IS_VALID_FORM } from '../../constants/constants';
import { ActionType, formReducer } from '../Form/Form.state';
import { SearchFormProps } from './SearchForm.props';

function SearchForm({
	name,
	textButton,
	classNameFrom,
	classNameButton,
	placeholder,
	icon
}: SearchFormProps) {
	const [formState, dispatchForm] = useReducer(formReducer, IS_VALID_FORM);

	const { isValid, value, isReadyToSubmit } = formState;

	const buttonRef = useRef<HTMLButtonElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

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
				dispatchForm({ type: ActionType.Reset });
			}, 2500);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isReadyToSubmit) {
			dispatchForm({ type: ActionType.Clear });
		}
	}, [isReadyToSubmit]);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatchForm({
			type: ActionType.SetValue,
			payload: event.target.value
		});
	};

	return (
		<div className={styles[classNameFrom]}>
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
		</div>
	);
}

export default SearchForm;
