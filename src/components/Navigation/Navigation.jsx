import styles from './Navigation.module.css';

function Navigation() {
	return (
		<nav className={styles['header__nav']}>
			<a href="#" className={styles['header__search-flims']}>
				Поиск фильмов
			</a>
			<div className={styles['header__favorites']}>
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
