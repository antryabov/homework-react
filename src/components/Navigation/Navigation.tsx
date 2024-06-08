import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { usersAction } from '../../store/users.slice';

function Navigation() {
	const { isLogined, login } = useSelector(
		(state: RootState) => state.users.logined
	);
	const favoritesFilms = useSelector(
		(state: RootState) => state.favorites.favorites
	);
	const dispatch = useDispatch<AppDispatch>();

	const onClick = () => {
		dispatch(usersAction.logout());
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
					<div className={styles.header__favoritesCount}>
						{favoritesFilms.length}
					</div>
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
