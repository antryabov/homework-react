export interface Movie {
	title: string;
	img?: string;
	raiting?: string;
	id?: number;
}

export interface ValidityForm {
	isValid: boolean | number;
	value: string;
	isReadyToSubmit: boolean | number;
}

export interface Authorization {
	login: string;
	isLogined: boolean;
}

interface IData {
	[key: string]: string;
}

export const MOVIE_DATABASE: Movie[] = [
	{
		title: 'Shang Chi',
		img: 'shang.jpeg',
		raiting: '356',
		id: 1
	},
	{
		title: 'Black Chisas',
		img: 'shang.jpeg',
		raiting: '2',
		id: 2
	},
	{
		title: 'Shang Chi',
		img: 'shang.jpeg',
		raiting: '3356',
		id: 3
	},
	{
		title: 'Pokemon Chisas',
		img: 'shang.jpeg',
		raiting: '326',
		id: 4
	}
];

export const IS_VALID_FORM: ValidityForm = {
	isValid: true,
	value: '',
	isReadyToSubmit: false
};

export const AUTHORIZATION: Authorization = {
	login: '',
	isLogined: false
};

export const DATA: Array<IData> = [
	{
		buttonSearch: 'Искать',
		search: 'Поиск',
		textSearch:
			'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
		placeholderSearch: 'Введите название'
	},
	{
		hiddenTitleForSEO: 'Мир фильмов'
	},
	{
		auth: 'Вход',
		buttonAuth: 'Войти в профиль',
		placeholderAuth: 'Ваше имя'
	}
];
