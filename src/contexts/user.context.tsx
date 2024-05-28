import { createContext, useState } from 'react';
import { AUTHORIZATION, Authorization } from '../constants/constants';
import { UserContextProp } from './user.context.props';

export const UserContext = createContext({
	login: '',
	isLogined: false,
	setUserLogined: (user: Authorization) => {
		user;
	}
});

export const UserContextProvider = ({ children }: UserContextProp) => {
	const [userLogined, setUserLogined] =
		useState<Authorization>(AUTHORIZATION);

	return (
		<UserContext.Provider value={{ ...userLogined, setUserLogined }}>
			{children}
		</UserContext.Provider>
	);
};
