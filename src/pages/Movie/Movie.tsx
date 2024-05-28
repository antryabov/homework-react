import styles from './Movie.module.css';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';
import { DATA } from '../../constants/constants';
import { useParams } from 'react-router-dom';

function Movie() {
	const { id } = useParams();

	return (
		<SectionBlock className={styles.main__Movie}>
			<Headline className={styles.favorites__Movie}>
				{DATA[4].film}
			</Headline>
			<div> - айдишник фильма {id}</div>
		</SectionBlock>
	);
}

export default Movie;
