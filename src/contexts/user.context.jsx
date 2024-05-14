import { createContext, useState } from 'react';
import { AUTHORIZATION } from '../constants/constants';

export const UserContext = createContext(AUTHORIZATION);

export const UserContextProvider = ({ children }) => {
	const [userLogined, setUserLogined] = useState(AUTHORIZATION);

	return (
		<UserContext.Provider value={{ userLogined, setUserLogined }}>
			{children}
		</UserContext.Provider>
	);
};
