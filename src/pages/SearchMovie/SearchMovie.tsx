import { useState } from 'react';
import { MOVIE_DATABASE, DATA } from '../../constants/constants';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';
import SearchText from '../../components/SearchText/SearchText';
import FilmList from '../../components/FilmList/FilmList';
import styles from './SearchMovie.module.css';
import Form from '../../components/Form/Form';

function SearchMovie() {
	const [films, setFilms] = useState(MOVIE_DATABASE); // Для вывода фильмов на главной странице

	const addFilms = (film: string): void => {
		console.log('Нашел фильм - ', film); // Поиск фильм (заглушка)
	};

	return (
		<>
			<SectionBlock className={styles.main__searchPanel}>
				<Headline className={styles.searchPanel__title}>
					{DATA[0].search}
				</Headline>
				<SearchText>{DATA[0].textSearch}</SearchText>
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
					textButton={DATA[0].buttonSearch}
					placeholder={DATA[0].placeholderSearch}
					onSubmitForm={addFilms}
				/>
			</SectionBlock>
			<SectionBlock className={styles.main__films}>
				<FilmList films={films} />
			</SectionBlock>
		</>
	);
}

export default SearchMovie;
