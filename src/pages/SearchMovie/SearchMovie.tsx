import { useState } from 'react';
import { MOVIE_DATABASE, DATA } from '../../constants/constants';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';
import SearchText from '../../components/SearchText/SearchText';
import FilmList from '../../components/FilmList/FilmList';
import styles from './SearchMovie.module.css';
import SearchForm from '../../components/SearchForm/SearchForm';

function SearchMovie() {
	const [films, setFilms] = useState(MOVIE_DATABASE);
	return (
		<>
			<SectionBlock className={styles.main__searchPanel}>
				<Headline className={styles.searchPanel__title}>
					{DATA[0].search}
				</Headline>
				<SearchText>{DATA[0].textSearch}</SearchText>
				<SearchForm
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
				/>
			</SectionBlock>
			<SectionBlock className={styles.main__films}>
				<FilmList films={films} />
			</SectionBlock>
		</>
	);
}

export default SearchMovie;
