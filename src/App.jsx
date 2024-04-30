import './App.css';
import Button from './components/Button/Button';
import Headline from './components/Headline/Headline';
import SearchText from './components/SearchText/SearchText';

function App() {
	const data = [
		{
			buttonSearch: 'Искать',
			search: 'Поиск',
			textSearch:
				'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		}
	];

	return (
		<>
			<Headline text={data[0].search} />
			<SearchText text={data[0].textSearch} />
			<Button text={data[0].buttonSearch} />
		</>
	);
}

export default App;
