import { UserContextProvider } from '../../contexts/user.context';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Main from '../../components/Main/Main';
import { Outlet } from 'react-router-dom';
import { DATA } from '../../constants/constants';

function Layout() {
	return (
		<UserContextProvider>
			<Header>
				<img src="/bookmark.svg" alt="bookmark" />
				<h1>{DATA.HIDDEN_TITLE}</h1>
				<Navigation />
			</Header>
			<Main>
				<Outlet />
			</Main>
		</UserContextProvider>
	);
}

export default Layout;
