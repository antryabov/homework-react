import './Form.css';
import Button from '../Button/Button';

function Form({
	textButton,
	classNameFrom,
	classNameButton,
	placeholder,
	icon
}) {
	function searchInput(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	}

	return (
		<form className={classNameFrom} onSubmit={searchInput}>
			{icon}
			<input type="text" name="search" placeholder={placeholder} />
			<Button text={textButton} className={classNameButton} />
		</form>
	);
}

export default Form;
