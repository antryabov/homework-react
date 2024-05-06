import styles from './CardButton.module.css';

function CardButton({ children }) {
	return <div className={styles['films__card-button']}>{children}</div>;
}

export default CardButton;
