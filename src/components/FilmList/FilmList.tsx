import styles from './FilmList.module.css';
import FilmItem from '../FilmItem/FilmItem';
import { FilmListProps } from './FilmList.props';
import { Link } from 'react-router-dom';

function FilmList({ films }: FilmListProps) {
	return (
		<>
			{films.map((el) => (
				<Link
					className={styles.films__cardButton}
					to={`/Movie/${el.id}`}
					key={el.id}
				>
					<FilmItem
						title={el.title}
						img={el.img}
						rating={el.rating}
					/>
				</Link>
			))}
		</>
	);
}

export default FilmList;
