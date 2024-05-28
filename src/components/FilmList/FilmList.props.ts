import { HTMLAttributes } from 'react';
import { Movie } from '../../constants/constants';

export interface FilmListProps extends HTMLAttributes<HTMLElement> {
	films: Movie[];
}
