import { DATA } from '../../constants/constants';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';

import styles from './NotFound.module.css';

function NotFound() {
	return (
		<>
			<SectionBlock className={styles.main__notFound}>
				<Headline className={styles.notFound__title}>
					{DATA.NOT_FOUND_TITLE}
				</Headline>
				<p className={styles.notFound__text}>{DATA.NOT_FOUND_TEXT}</p>
			</SectionBlock>
		</>
	);
}

export default NotFound;
