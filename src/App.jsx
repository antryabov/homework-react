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

const MOVIE_DATABASE = [
	{
		title: 'Shang Chi',
		img: 'shang.jpeg',
		raiting: '356',
		id: 1
	},
	{
		title: 'Black Chisas',
		img: 'shang.jpeg',
		raiting: '2',
		id: 2
	},
	{
		title: 'Shang Chi',
		img: 'shang.jpeg',
		raiting: '3356',
		id: 3
	},
	{
		title: 'Pokemon Chisas',
		img: 'shang.jpeg',
		raiting: '326',
		id: 4
	},
	{
		title: 'Avangers Chi',
		img: 'shang.jpeg',
		raiting: '1',
		id: 5
	},
	{
		title: 'Shang Chisas',
		img: 'shang.jpeg',
		raiting: '356',
		id: 6
	}
];

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
					<Headline
						text={data[0].search}
						className={styles['search-panel__title']}
					/>
					<SearchText text={data[0].textSearch} />
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
