import { configureStore } from '@reduxjs/toolkit';
import { favoritesSlice } from './favorite.slice';
import { saveData } from './storage';
import { usersSlice } from './users.slice';

export const store = configureStore({
	reducer: {
		favorites: favoritesSlice.reducer,
		users: usersSlice.reducer
	}
});

store.subscribe(() => {
	saveData('activeUser', store.getState().users.logined.login);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
