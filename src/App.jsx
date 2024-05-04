import './App.css';
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
		id: 1
	},
	{
		title: 'Pokemon Chisas',
		img: 'shang.jpeg',
		raiting: '326',
		id: 2
	},
	{
		title: 'Avangers Chi',
		img: 'shang.jpeg',
		raiting: '1',
		id: 1
	},
	{
		title: 'Shang Chisas',
		img: 'shang.jpeg',
		raiting: '356',
		id: 2
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
		<div className="app">
			<Header>
				<img src="/bookmark.svg" alt="bookmark" />
				<h1>{data[1].hiddenTitleForSEO}</h1>
				<Navigation />
			</Header>
			<Main>
				<SectionBlock className="main__search-panel">
					<Headline
						text={data[0].search}
						className="search-panel__title"
					/>
					<SearchText text={data[0].textSearch} />
					<Form
						icon={
							<img
								className="search-panel__search-icon"
								src="/search.svg"
								alt="icon search"
							/>
						}
						classNameFrom="search-panel__search-form"
						textButton={data[0].buttonSearch}
						placeholder={data[0].placeholderSearch}
					/>
				</SectionBlock>
				<SectionBlock className="main__films">
					<FilmList films={films} />
				</SectionBlock>
			</Main>
		</div>
	);
}

export default App;
