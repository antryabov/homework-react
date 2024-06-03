import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const RequestAuth = ({ children }: { children: ReactNode }) => {
	const { isLogined } = useSelector(
		(state: RootState) => state.users.logined
	);

	if (!isLogined) {
		return <Navigate to="/login" replace />;
	}

	return children;
};
