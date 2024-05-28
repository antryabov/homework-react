import { HTMLAttributes, ReactNode } from 'react';

export interface SeactionBlockProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className: string | '';
}
