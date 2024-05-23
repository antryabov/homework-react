import { HTMLAttributes } from 'react';
import { Movie } from '../../constants/constants';

export type FilmItemProps = HTMLAttributes<HTMLElement> & Movie;
