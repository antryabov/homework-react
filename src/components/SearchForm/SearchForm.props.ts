import { FormHTMLAttributes, ReactElement } from 'react';

export interface SearchFormProps extends FormHTMLAttributes<HTMLFormElement> {
	textButton: string;
	classNameFrom: string;
	classNameButton?: string | undefined;
	placeholder: string;
	icon?: ReactElement;
}
