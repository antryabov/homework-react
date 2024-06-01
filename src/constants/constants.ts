export interface ValidityForm {
	isValid: boolean | number;
	value: string;
	isReadyToSubmit: boolean | number;
}

export interface Authorization {
	login: string;
	isLogined: boolean;
}

export const IS_VALID_FORM: ValidityForm = {
	isValid: true,
	value: '',
	isReadyToSubmit: false
};

export const AUTHORIZATION: Authorization = {
	login: '',
	isLogined: false
};

export enum DATA {
	BUTTON_SEARCH = 'Искать',
	SEARCH = 'Поиск',
	TEXT_SEARCH = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
	PLACEHOLDER_SEARCH = 'Введите название',
	HIDDEN_TITLE = 'Мир фильмов',
	AUTH = 'Вход',
	BUTTON_AUTH = 'Войти в профиль',
	PLACEHOLDER_AUTH = 'Ваше имя',
	FAVORITES_TITLE = 'Избранное',
	NOT_FOUND_TITLE = 'Упс... Ничего не найдено!',
	NOT_FOUND_TEXT = 'Попробуйте изменить запрос или ввести более точное название фильма'
}
