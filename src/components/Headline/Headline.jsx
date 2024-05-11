import styles from './Headline.module.css';

function Headline({ children, className }) {
	return <h2 className={styles[className]}>{children}</h2>;
}

export default Headline;
