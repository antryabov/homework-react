import CardButton from '../CardButton/CardButton';
import './FilmList.css';
import FilmItem from '../FilmItem/FilmItem';
import { FilmListProps } from './FilmList.props';

function FilmList({ films }: FilmListProps) {
	return (
		<>
			{films.map((el) => (
				<CardButton key={el.id}>
					<FilmItem
						title={el.title}
						img={el.img}
						raiting={el.raiting}
					/>
				</CardButton>
			))}
		</>
	);
}

export default FilmList;
