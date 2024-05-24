import styles from './Main.module.css';
import { MainProps } from './Main.props';

function Main({ children }: MainProps) {
	return <main className={styles.main}>{children}</main>;
}

export default Main;
