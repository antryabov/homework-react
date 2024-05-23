import styles from './SearchText.module.css';
import { SearchTextProps } from './SearchText.props';

function SearchText({ children }: SearchTextProps) {
	return <p className={styles.searchPanel__text}>{children}</p>;
}

export default SearchText;
