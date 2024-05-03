import './Headline.css';

function Headline({ text, className }) {
	return <h2 className={className}>{text}</h2>;
}

export default Headline;
