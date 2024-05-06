import styles from './Button.module.css';

function Button({ text, onClick, className }) {
	const addSecondClass =
		'button' + (styles[className] ? ' ' + styles[className] : '');
	return (
		<button className={styles[addSecondClass]} onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
