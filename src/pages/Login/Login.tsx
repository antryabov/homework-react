import styles from './Login.module.css';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';
import Form from '../../components/Form/Form';
import { DATA } from '../../constants/constants';

function Login() {
	return (
		<SectionBlock className={styles.main__authPanel}>
			<Headline className={styles.authPanel__title}>{DATA.AUTH}</Headline>
			<Form
				name="login"
				classNameFrom="authPanel__form"
				textButton={DATA.BUTTON_AUTH}
				placeholder={DATA.PLACEHOLDER_AUTH}
				classNameButton="authPanel__button"
			/>
		</SectionBlock>
	);
}

export default Login;
