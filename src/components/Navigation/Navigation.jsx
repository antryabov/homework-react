import { useContext } from 'react';
import styles from './Navigation.module.css';
import { UserContext } from '../../contexts/user.context';
import { AUTHORIZATION } from '../../constants/constants';

function Navigation() {
	const { userLogined, setUserLogined } = useContext(UserContext);

	const onClick = () => {
		setUserLogined(AUTHORIZATION);
	};

	if (userLogined.isLogined) {
		return (
			<nav className={styles.header__nav}>
				<a href="#" className={styles['header__search-flims']}>
					Поиск фильмов
				</a>
				<div className={styles.header__favorites}>
					<a href="#" className={styles['header__favorites-link']}>
						Мои фильмы
					</a>
					<div className={styles['header__favorites-count']}>0</div>
				</div>
				<a href="#" className={styles['header__sign-in']}>
					{userLogined.login}
					<img src="/sign-in.svg" alt="sign-in icon" />
				</a>
				<a
					href="#"
					onClick={onClick}
					className={styles['header__sign-in']}
				>
					Выйти
				</a>
			</nav>
		);
	}

	return (
		<nav className={styles.header__nav}>
			<a href="#" className={styles['header__search-flims']}>
				Поиск фильмов
			</a>
			<div className={styles.header__favorites}>
				<a href="#" className={styles['header__favorites-link']}>
					Мои фильмы
				</a>
				<div className={styles['header__favorites-count']}>0</div>
			</div>
			<a href="#" className={styles['header__sign-in']}>
				Войти
				<img src="/sign-in.png" alt="sign-in icon" />
			</a>
		</nav>
	);
}

export default Navigation;
