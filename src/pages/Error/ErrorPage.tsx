import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';

import styles from './ErrorPage.module.css';

function ErrorPage() {
	return (
		<>
			<SectionBlock className={styles.main__error}>
				<Headline className={styles.error__title}>
					Ошибка запроса!
				</Headline>
			</SectionBlock>
		</>
	);
}

export default ErrorPage;
