import { useCallback, useEffect, useState } from 'react';
import { DATA } from '../../constants/constants';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';
import SearchText from '../../components/SearchText/SearchText';
import FilmList from '../../components/FilmList/FilmList';
import styles from './SearchMovie.module.css';
import Form from '../../components/Form/Form';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';
import { Search, Movies } from '../../interfaces/movie.interface';

function SearchMovie() {
	const [films, setFilms] = useState<Search[]>([]);
	const [searchMovie, setSearchMovie] = useState<string | undefined>('all');
	const [error, setError] = useState<string | undefined>();

	const searchFilm = useCallback((film: string): void => {
		setSearchMovie(film);
	}, []);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getFilms = async () => {
		try {
			const { data } = await axios.get<Movies>(`${PREFIX}${searchMovie}`);
			setFilms(data.Search);
		} catch (error) {
			console.error(error);
			if (error instanceof AxiosError) {
				setError(error.message);
			}

			return;
		}
	};

	useEffect(() => {
		getFilms();
	}, [searchFilm, getFilms]);

	return (
		<>
			<SectionBlock className={styles.main__searchPanel}>
				<Headline className={styles.searchPanel__title}>
					{DATA.SEARCH}
				</Headline>
				<SearchText>{DATA.TEXT_SEARCH}</SearchText>
				<Form
					icon={
						<img
							className={styles.searchPanel__icon}
							src="/search.svg"
							alt="icon search"
						/>
					}
					name="search"
					classNameFrom="searchPanel__form"
					textButton={DATA.BUTTON_SEARCH}
					placeholder={DATA.PLACEHOLDER_SEARCH}
					onSubmitForm={searchFilm}
				/>
			</SectionBlock>
			<SectionBlock className={styles.main__films}>
				{error && <>{error}</>}
				<FilmList films={films} />
			</SectionBlock>
		</>
	);
}

export default SearchMovie;
