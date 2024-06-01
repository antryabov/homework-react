import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';

import styles from './Preloader.module.css';

function Preloader() {
	return (
		<>
			<SectionBlock className={styles.main__preloader}>
				<Headline className={styles.preloader__title}>
					Загружаем...
				</Headline>
			</SectionBlock>
		</>
	);
}

export default Preloader;
