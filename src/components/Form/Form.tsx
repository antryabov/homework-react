import styles from './Form.module.css';
import Button from '../Button/Button';
import {
	ChangeEvent,
	FormEvent,
	useContext,
	useEffect,
	useReducer,
	useRef
} from 'react';
import Input from '../Input/Input';
import { IS_VALID_FORM } from '../../constants/constants';
import { ActionType, formReducer } from './Form.state';
import { UserContext } from '../../contexts/user.context';
import { FormProps } from './Form.props';

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

	const { setUserLogined } = useContext(UserContext);

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
			if (name === 'login') {
				onSubmitForm(value);

				setUserLogined({
					login: value,
					isLogined: true
				});
			}
			onSubmitForm(value);

			dispatchForm({ type: ActionType.Clear });
		}
	}, [isReadyToSubmit, onSubmitForm, setUserLogined, value, name]);

	function searchInput(event: FormEvent) {
		event.preventDefault();
		dispatchForm({ type: ActionType.Submit });
	}

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatchForm({
			type: ActionType.SetValue,
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
