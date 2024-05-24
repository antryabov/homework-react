import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout/Layout.tsx';
import SearchMovie from './pages/SearchMovie/SearchMovie.tsx';
import Login from './pages/Login/Login.tsx';
import Movie from './pages/Movie/Movie.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <SearchMovie />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/movie/:id',
				element: <Movie />
			},
			{
				path: '/favorites',
				element: <Favorites />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
