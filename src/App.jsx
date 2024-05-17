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
import { MOVIE_DATABASE, DATA } from './constants/constants';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvider } from './contexts/user.context';

function App() {
	const [films, setFilms] = useState(MOVIE_DATABASE);
	const [users, setUsers] = useLocalStorage('users');

	const addUsers = (user) => {
		if (users.find((el) => el.login === user)) {
			return;
		} else {
			setUsers([...users, { login: user }]);
		}
	};

	return (
		<UserContextProvider>
			<Header>
				<img src="/bookmark.svg" alt="bookmark" />
				<h1>{DATA[1].hiddenTitleForSEO}</h1>
				<Navigation />
			</Header>

			<Main>
				<SectionBlock className={styles['main__search-panel']}>
					<Headline className={styles['search-panel__title']}>
						{DATA[0].search}
					</Headline>
					<SearchText>{DATA[0].textSearch}</SearchText>
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
						textButton={DATA[0].buttonSearch}
						placeholder={DATA[0].placeholderSearch}
					/>
				</SectionBlock>
				<SectionBlock className={styles['main__auth-panel']}>
					<Headline className={styles['auth-panel__title']}>
						{DATA[2].auth}
					</Headline>
					<Form
						name="login"
						onSubmit={addUsers}
						classNameFrom="auth-panel__auth-form"
						textButton={DATA[2].buttonAuth}
						placeholder={DATA[2].placeholderAuth}
						classNameButton="auth-panel__auth-button"
					/>
				</SectionBlock>
				<SectionBlock className={styles.main__films}>
					<FilmList films={films} />
				</SectionBlock>
			</Main>
		</UserContextProvider>
	);
}

export default App;
