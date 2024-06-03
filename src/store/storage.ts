export function getData<T>(key: string): T | undefined {
	try {
		const data = localStorage.getItem(key);
		if (!data) {
			return undefined;
		}
		return JSON.parse(data);
	} catch (error) {
		console.error(error);
		return undefined;
	}
}

export function saveData<T>(key: string, data: T): void {
	localStorage.setItem(key, JSON.stringify(data));
}
