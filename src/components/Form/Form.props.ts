import { FormHTMLAttributes } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	textButton: string;
	classNameFrom: string;
	classNameButton?: string | undefined;
	placeholder: string;
	onSubmitForm: (user: string) => void;
}
