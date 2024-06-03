import { FormHTMLAttributes, ReactElement } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	textButton: string;
	classNameFrom: string;
	classNameButton?: string | undefined;
	placeholder: string;
	icon?: ReactElement;
	onSubmitForm?: (params: string) => void;
}
