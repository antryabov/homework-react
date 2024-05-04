import CardButton from '../CardButton/CardButton';
import './FilmList.css';
import FilmItem from '../FilmItem/FilmItem';

function FilmList({ films }) {
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
