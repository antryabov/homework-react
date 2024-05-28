import { useEffect, useState } from 'react';

export interface User {
	login: string;
}

export function useLocalStorage(
	key: string
): [User[], (newData: User[]) => void] {
	const [items, setData] = useState<User[]>([]);
	const getData = localStorage.getItem(key);

	useEffect(() => {
		if (typeof getData === 'string') {
			const response: User[] = JSON.parse(getData);
			if (response) {
				setData(response);
			}
		}
	}, [getData]);

	const saveData = (newData: User[]): void => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [items, saveData];
}
