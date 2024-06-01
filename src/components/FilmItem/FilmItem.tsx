import styles from './FilmItem.module.css';
import { FilmItemProps } from './FilmItem.props';

function FilmItem({ title, img, rating }: FilmItemProps) {
	return (
		<div className={styles.filmsCard}>
			<div className={styles.films__rating}>
				<img src="/star.svg" alt="star icon" />
				{rating}
			</div>
			<img
				className={styles.films__poster}
				src={img}
				alt={title}
				width="266"
				height="400"
			/>
			<div className={styles.films__info}>
				<h2 className={styles.films__title}>{title}</h2>
				<button className={styles.films__favorites}>
					<img src="/like.svg" alt="like icon" />В избранное
				</button>
			</div>
		</div>
	);
}

export default FilmItem;
