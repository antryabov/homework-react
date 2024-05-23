import { useContext } from 'react';
import styles from './Navigation.module.css';
import { UserContext } from '../../contexts/user.context';
import { AUTHORIZATION } from '../../constants/constants';

function Navigation() {
	const { login, isLogined, setUserLogined } = useContext(UserContext);

	const onClick = () => {
		setUserLogined(AUTHORIZATION);
	};

	if (isLogined) {
		return (
			<nav className={styles.header__nav}>
				<a href="#">Поиск фильмов</a>
				<div className={styles.header__favorites}>
					<a href="#">Мои фильмы</a>
					<div className={styles.header__favoritesCount}>0</div>
				</div>
				<a href="#" className={styles.header__signIn}>
					{login}
					<img src="/sign-in.svg" alt="sign-in icon" />
				</a>
				<a href="#" onClick={onClick} className={styles.header__signIn}>
					Выйти
				</a>
			</nav>
		);
	}

	return (
		<nav className={styles.header__nav}>
			<a href="#">Поиск фильмов</a>
			<div className={styles.header__favorites}>
				<a href="#">Мои фильмы</a>
				<div className={styles.header__favoritesCount}>0</div>
			</div>
			<a href="#" className={styles.header__signIn}>
				Войти
				<img src="/sign-in.png" alt="sign-in icon" />
			</a>
		</nav>
	);
}

export default Navigation;
