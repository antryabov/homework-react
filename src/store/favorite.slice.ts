import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Search } from '../interfaces/movie.interface';
import { getData } from './storage';

interface FavoritesState {
	favorites: Search[];
}

const initialState: FavoritesState = {
	favorites:
		getData<FavoritesState>(getData('activeUser') as string)?.favorites ??
		[]
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites: (state, action: PayloadAction<Search>) => {
			const existed = state.favorites.find(
				(el) => el.imdbID === action.payload.imdbID
			);
			if (existed) {
				return;
			}
			state.favorites.push({ ...action.payload });
		},
		removeFromFavorites: (state, action: PayloadAction<Search>) => {
			const index = state.favorites.findIndex(
				(el) => el.imdbID === action.payload.imdbID
			);

			if (index !== -1) {
				state.favorites.splice(index, 1);
			}
		}
	}
});

export default favoritesSlice.reducer;
export const favoritesAction = favoritesSlice.actions;
