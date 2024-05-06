import styles from './SearchText.module.css';

function SearchText({ children }) {
	return <p className={styles['search-panel__search-text']}>{children}</p>;
}

export default SearchText;
