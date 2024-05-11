import { useEffect, useState } from 'react';

export function useLocalStorage(key) {
	const [items, setData] = useState([]);

	useEffect(() => {
		const response = JSON.parse(localStorage.getItem(key));
		if (response) {
			setData(response);
		}
	}, []);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [items, saveData];
}