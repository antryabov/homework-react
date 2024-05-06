import styles from './Headline.module.css';

function Headline({ text, className }) {
	return <h2 className={styles[className]}>{text}</h2>;
}

export default Headline;
