import styles from './Favorites.module.css';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';

import { DATA } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import FilmList from '../../components/FilmList/FilmList';

function Favorites() {
	const films = useSelector((state: RootState) => state.favorites.favorites);
	return (
		<SectionBlock className={styles.main__favorites}>
			<Headline className={styles.favorites__title}>
				{DATA.FAVORITES_TITLE}
			</Headline>
			<SectionBlock className={styles.main__favoritesFilms}>
				<FilmList films={films} />
			</SectionBlock>
		</SectionBlock>
	);
}

export default Favorites;
