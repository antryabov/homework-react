import styles from './SearchText.module.css';

function SearchText({ text }) {
	return <p className={styles['search-panel__search-text']}>{text}</p>;
}

export default SearchText;
