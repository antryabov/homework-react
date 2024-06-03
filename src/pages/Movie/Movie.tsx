import styles from './Movie.module.css';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';

import { Await, useLoaderData } from 'react-router-dom';
import { filmCard } from '../../interfaces/movie.interface';
import { Suspense } from 'react';
import Preloader from '../Preloader/Preloader';

function Movie() {
	const data = useLoaderData() as { data: filmCard };

	return (
		<Suspense fallback={<Preloader />}>
			<Await resolve={data.data}>
				{({ data }: { data: filmCard }) => (
					<SectionBlock className={styles.main__Movie}>
						<Headline className={styles.favorites__MovieHeader}>
							{data.Title}
						</Headline>
						<div className={styles.favorites__MovieMain}>
							<img
								src={data.Poster}
								alt={data.Title}
								width="480"
								height="720"
							/>
							<div className={styles.MovieMain__MovieInfo}>
								<p className={styles.MovieInfo__description}>
									{data.Plot}
								</p>
								<div
									className={styles.MovieInfo__favoritesMovie}
								>
									<div
										className={
											styles.favoritesMovie__rating
										}
									>
										<img src="/star.svg" alt="star icon" />
										{data.imdbRating}
									</div>
								</div>
								<p
									className={
										(styles.MovieInfo__type, styles.info)
									}
								>
									<span>Тип</span>
									{data.Type}
								</p>
								<p
									className={
										(styles.MovieInfo__release, styles.info)
									}
								>
									<span>Дата выхода</span>
									{data.Year}
								</p>
								<p
									className={
										(styles.MovieInfo__length, styles.info)
									}
								>
									<span>Длительность</span>
									{data.Runtime}
								</p>
								<p
									className={
										(styles.MovieInfo__genre, styles.info)
									}
								>
									<span>Длительность</span>
									{data.Genre}
								</p>
							</div>
						</div>
						<div className={styles.MovieMain__MovieFooter}>
							<p className={styles.feedBack__title}>Отзывы</p>

							<div className={styles.fallback__feedbackFilms}>
								<span>{data.Title}</span>
								<br />
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Quas labore assumenda deleniti
								eius, aspernatur magnam dolores sed aut possimus
								nisi odio reprehenderit saepe exercitationem
								fugit illo similique est, ex iure.
							</div>
						</div>
					</SectionBlock>
				)}
			</Await>
		</Suspense>
	);
}

export default Movie;
