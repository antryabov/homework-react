import styles from './Favorites.module.css';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';

import { DATA } from '../../constants/constants';

function Favorites() {
	return (
		<SectionBlock className={styles.main__favorites}>
			<Headline className={styles.favorites__title}>
				{DATA.FAVORITES_TITLE}
			</Headline>
		</SectionBlock>
	);
}

export default Favorites;
