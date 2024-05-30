import { useContext } from 'react';
import styles from './Navigation.module.css';
import { UserContext } from '../../contexts/user.context';
import { AUTHORIZATION } from '../../constants/constants';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

function Navigation() {
	const { login, isLogined, setUserLogined } = useContext(UserContext);

	const onClick = () => {
		setUserLogined(AUTHORIZATION);
	};

	if (isLogined) {
		return (
			<nav className={styles.header__nav}>
				<NavLink
					to="/"
					className={({ isActive }) =>
						classNames({
							[styles.active]: isActive
						})
					}
				>
					Поиск фильмов
				</NavLink>
				<div className={styles.header__favorites}>
					<NavLink
						to="/Favorites"
						className={({ isActive }) =>
							classNames({
								[styles.active]: isActive
							})
						}
					>
						Мои фильмы
					</NavLink>
					<div className={styles.header__favoritesCount}>0</div>
				</div>
				<div className={styles.header__signIn}>
					{login}
					<img src="/sign-in.svg" alt="sign-in icon" />
				</div>
				<NavLink
					onClick={onClick}
					to="/login"
					className={({ isActive }) =>
						classNames(styles.header__signIn, {
							[styles.active]: isActive
						})
					}
				>
					Выйти
					<img src="/sign-in.png" alt="sign-in icon" />
				</NavLink>
			</nav>
		);
	}

	return (
		<nav className={styles.header__nav}>
			<NavLink
				to="/"
				className={({ isActive }) =>
					classNames({
						[styles.active]: isActive
					})
				}
			>
				Поиск фильмов
			</NavLink>
			<div className={styles.header__favorites}>
				<NavLink
					to="/Favorites"
					className={({ isActive }) =>
						classNames({
							[styles.active]: isActive
						})
					}
				>
					Мои фильмы
				</NavLink>
			</div>
			<NavLink
				to="/Login"
				className={({ isActive }) =>
					classNames(styles.header__signIn, {
						[styles.active]: isActive
					})
				}
			>
				Войти
				<img src="/sign-in.png" alt="sign-in icon" />
			</NavLink>
		</nav>
	);
}

export default Navigation;
