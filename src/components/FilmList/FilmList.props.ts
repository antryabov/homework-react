import { HTMLAttributes } from 'react';
import { Search } from '../../interfaces/movie.interface';

export interface FilmListProps extends HTMLAttributes<HTMLElement> {
	films: Search[];
}
