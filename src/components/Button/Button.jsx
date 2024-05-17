import { forwardRef } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

const Button = forwardRef(function Button({ text, onClick, className }, ref) {
	return (
		<button
			ref={ref}
			className={classNames(styles.button, styles[className])}
			onClick={onClick}
		>
			{text}
		</button>
	);
});

export default Button;
