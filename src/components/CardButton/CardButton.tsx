import styles from './CardButton.module.css';
import { CardButtonProps } from './CardButton.props';

function CardButton({ children }: CardButtonProps) {
	return <div className={styles.films__cardButton}>{children}</div>;
}

export default CardButton;
