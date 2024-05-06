import styles from './App.module.css';
import { useState } from 'react';
import Headline from './components/Headline/Headline';
import SearchText from './components/SearchText/SearchText';
import Header from './layouts/Header/Header';
import Form from './components/Form/Form';
import Navigation from './components/Navigation/Navigation';
import SectionBlock from './components/SectionBlock/SectionBlock';
import Main from './layouts/Main/Main';
import FilmList from './components/FilmList/FilmList';
import { MOVIE_DATABASE } from './constants/constants';

function App() {
	const [films, setFilms] = useState(MOVIE_DATABASE);
	const data = [
		{
			buttonSearch: 'Искать',
			search: 'Поиск',
			textSearch:
				'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
			placeholderSearch: 'Введите название'
		},
		{
			hiddenTitleForSEO: 'Мир фильмов'
		}
	];

	return (
		<>
			<Header>
				<img src="/bookmark.svg" alt="bookmark" />
				<h1>{data[1].hiddenTitleForSEO}</h1>
				<Navigation />
			</Header>
			<Main>
				<SectionBlock className={styles['main__search-panel']}>
					<Headline className={styles['search-panel__title']}>
						{data[0].search}
					</Headline>
					<SearchText>{data[0].textSearch}</SearchText>
					<Form
						icon={
							<img
								className={styles['search-panel__search-icon']}
								src="/search.svg"
								alt="icon search"
							/>
						}
						classNameFrom={styles['search-panel__search-form']}
						textButton={data[0].buttonSearch}
						placeholder={data[0].placeholderSearch}
					/>
				</SectionBlock>
				<SectionBlock className={styles['main__films']}>
					<FilmList films={films} />
				</SectionBlock>
			</Main>
		</>
	);
}

export default App;
