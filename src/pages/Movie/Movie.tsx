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
						<Headline className={styles.favorites__Movie}>
							{data.Title}
						</Headline>
					</SectionBlock>
				)}
			</Await>
		</Suspense>
	);
}

export default Movie;
