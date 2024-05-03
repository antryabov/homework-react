import './App.css';
import Headline from './components/Headline/Headline';
import SearchText from './components/SearchText/SearchText';
import SearchPanel from './layouts/SearchPanel/SearchPanel';
import Header from './layouts/Header/Header';
import Form from './components/Form/Form';
import Navigation from './components/Navigation/Navigation';

function App() {
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
			<main className="main">
				<SearchPanel>
					<Headline text={data[0].search} className="main__title" />
					<SearchText text={data[0].textSearch} />
					<Form
						icon={
							<img
								className="main__search-icon"
								src="/search.svg"
								alt="icon search"
							/>
						}
						classNameFrom="main__search-form"
						textButton={data[0].buttonSearch}
						placeholder={data[0].placeholderSearch}
					/>
				</SearchPanel>
			</main>
		</div>
	);
}

export default App;
