import { forwardRef } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import { ButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ onClick, className, children },
	ref
) {
	return (
		<button
			ref={ref}
			className={classNames(styles.button, styles[`${className}`])}
			onClick={onClick}
		>
			{children}
		</button>
	);
});

export default Button;
