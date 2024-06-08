import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Authorization } from '../constants/constants';
import { getData } from './storage';
/* import { store } from './store'; */

interface UsersState {
	logined: Authorization;
}

const initialState: UsersState = {
	logined: {
		login: getData('activeUser') ?? '',
		isLogined: getData('activeUser') ? true : false
	}
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		logined: (state, action: PayloadAction<Authorization>) => {
			state.logined = {
				login: action.payload.login,
				isLogined: action.payload.isLogined
			};
		},
		logout: (state) => {
			state.logined = {
				login: '',
				isLogined: false
			};
		}
	}
});

export default usersSlice.reducer;
export const usersAction = usersSlice.actions;
