import './FilmItem.css';

function FilmItem({ title, img, raiting }) {
	return (
		<>
			<div className="films__raiting">
				<img src="/star.svg" alt="star icon" />
				{raiting}
			</div>
			<img className="films__poster" src={img} alt={title} />
			<div className="films__info">
				<h2 className="films__title">{title}</h2>
				<button className="films__favorites">
					<img src="/like.svg" alt="like icon" />В избранное
				</button>
			</div>
		</>
	);
}

export default FilmItem;
