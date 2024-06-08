import { MouseEvent } from 'react';
import styles from './FilmItem.module.css';
import { FilmItemProps } from './FilmItem.props';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, store } from '../../store/store';
import { favoritesAction } from '../../store/favorite.slice';
import { saveData } from '../../store/storage';

function FilmItem({ Title, Poster, rating, imdbID }: FilmItemProps) {
	const dispatch = useDispatch<AppDispatch>();
	const films = useSelector((state: RootState) => state.favorites.favorites);
	const existed = films.find((el) => el.imdbID === imdbID);

	const addToFavorites = (event: MouseEvent) => {
		event.preventDefault();
		dispatch(
			favoritesAction.addToFavorites({
				Title,
				Poster,
				rating,
				imdbID
			})
		);
		saveData(
			store.getState().users.logined.login,
			store.getState().favorites
		);
	};

	const removeFromFavorites = (event: MouseEvent) => {
		event.preventDefault();
		dispatch(
			favoritesAction.removeFromFavorites({
				imdbID,
				Title,
				Poster,
				rating
			})
		);
		saveData(
			store.getState().users.logined.login,
			store.getState().favorites
		);
	};

	return (
		<div className={styles.filmsCard}>
			<div className={styles.films__rating}>
				<img src="/star.svg" alt="star icon" />
				{rating}
			</div>
			<img
				className={styles.films__poster}
				src={Poster}
				alt={Title}
				width="266"
				height="400"
			/>
			<div className={styles.films__info}>
				<h2 className={styles.films__title}>{Title}</h2>

				{!existed && (
					<button
						className={styles.films__favorites}
						onClick={addToFavorites}
					>
						<img src="/like.svg" alt="like icon" />В избранное
					</button>
				)}
				{existed && (
					<button
						className={styles.films__favorites}
						onClick={removeFromFavorites}
					>
						<img src="/bookmark-favorites.svg" alt="like icon" />
						<span className={styles.inFavorites}>В избранном</span>
					</button>
				)}
			</div>
		</div>
	);
}

export default FilmItem;
