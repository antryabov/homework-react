import styles from './FilmList.module.css';
import FilmItem from '../FilmItem/FilmItem';
import { FilmListProps } from './FilmList.props';
import { Link } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';

function FilmList({ films }: FilmListProps) {
	return (
		<>
			{!films && <NotFound />}
			{films &&
				films.map((el) => (
					<Link
						className={styles.films__cardButton}
						to={`/Movie/${el.imdbID}`}
						key={el.imdbID}
					>
						<FilmItem
							Title={el.Title}
							Poster={el.Poster}
							imdbID={el.imdbID}
							rating={String(
								parseInt(el.imdbID.split('').reverse().join(''))
							)}
						/>
					</Link>
				))}
		</>
	);
}

export default FilmList;
