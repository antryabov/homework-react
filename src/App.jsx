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
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { AUTHORIZATION } from './constants/constants';

function App() {
	const [films, setFilms] = useState(MOVIE_DATABASE);
	const [users, setUsers] = useLocalStorage('users');
	const [user, setUser] = useState(AUTHORIZATION);

	const addUsers = (user) => {
		setUsers([...users, { login: user }]);
	};

	const loginedUser = (value) => {
		setUser({
			isLogined: true,
			login: JSON.parse(localStorage.getItem('users')).find(
				(el) => el.login === value
			).login
		});
	};

	const logout = () => {
		setUser(AUTHORIZATION);
	};

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
		},
		{
			auth: 'Вход',
			buttonAuth: 'Войти в профиль',
			placeholderAuth: 'Ваше имя'
		}
	];

	return (
		<>
			<Header>
				<img src="/bookmark.svg" alt="bookmark" />
				<h1>{data[1].hiddenTitleForSEO}</h1>
				<Navigation isValid={user} logout={logout} />
			</Header>
			<Main>
				<SectionBlock className="main__search-panel">
					<Headline className="search-panel__title">
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
						onSubmit={addUsers}
						name="search"
						classNameFrom="search-panel__search-form"
						textButton={data[0].buttonSearch}
						placeholder={data[0].placeholderSearch}
					/>
				</SectionBlock>
				<SectionBlock className="main__auth-panel">
					<Headline className="auth-panel__title">
						{data[2].auth}
					</Headline>
					<Form
						name="login"
						onSubmit={addUsers}
						classNameFrom="auth-panel__auth-form"
						textButton={data[2].buttonAuth}
						placeholder={data[2].placeholderAuth}
						classNameButton="auth-panel__auth-button"
						loginedUser={loginedUser}
					/>
				</SectionBlock>
				<SectionBlock className="main__films">
					<FilmList films={films} />
				</SectionBlock>
			</Main>
		</>
	);
}

export default App;
