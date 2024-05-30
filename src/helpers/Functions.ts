import { User } from '../hooks/use-localstorage.hook';

export const addUsers = (
	user: string,
	users: User[],
	setUsers: (newData: User[]) => void
): void => {
	if (users.find((el) => el.login === user)) {
		return;
	} else {
		setUsers([...users, { login: user }]);
	}
};
