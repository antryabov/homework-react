import { HTMLAttributes, ReactNode } from 'react';

export interface MainProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
}
