import { forwardRef } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

const Input = forwardRef(function input(
	{ className, type, name, placeholder, isValid, ...props },
	ref
) {
	return (
		<input
			ref={ref}
			type={type}
			name={name}
			className={classNames(
				classNames(styles.input, styles[className], {
					[styles.invalid]: !isValid
				})
			)}
			placeholder={placeholder}
			{...props}
		/>
	);
});

export default Input;
