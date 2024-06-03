import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Layout from './layouts/Layout/Layout.tsx';
import SearchMovie from './pages/SearchMovie/SearchMovie.tsx';
import Login from './pages/Login/Login.tsx';
import Movie from './pages/Movie/Movie.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import { PREFIX_WITH_ID } from './helpers/API.ts';
import axios from 'axios';
import ErrorPage from './pages/Error/ErrorPage.tsx';
import { RequestAuth } from './helpers/RequestAuth.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				errorElement: <NotFound />,
				element: (
					<RequestAuth>
						<SearchMovie />
					</RequestAuth>
				)
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/movie/:id',
				element: (
					<RequestAuth>
						<Movie />
					</RequestAuth>
				),
				errorElement: <ErrorPage />,
				loader: async ({ params }) => {
					return defer({
						data: new Promise((resolve, reject) => {
							axios
								.get(`${PREFIX_WITH_ID}${params.id}`)
								.then((data) => resolve(data))
								.catch((error) => reject(error));
						})
					});
				}
			},
			{
				path: '/favorites',
				element: (
					<RequestAuth>
						<Favorites />
					</RequestAuth>
				)
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
