import './Button.css';

function Button({ text, onClick, className }) {
	const addSecondClass = 'button' + (className ? ' ' + className : '');
	return (
		<button className={addSecondClass} onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
