import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/user.context';

export const RequestAuth = ({ children }: { children: ReactNode }) => {
	const { isLogined } = useContext(UserContext);
	if (!isLogined) {
		return <Navigate to="/login" replace />;
	}

	return children;
};
