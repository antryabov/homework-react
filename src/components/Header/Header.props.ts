import { ReactNode, HTMLAttributes } from 'react';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
}
