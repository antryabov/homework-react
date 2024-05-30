import styles from './Login.module.css';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import Headline from '../../components/Headline/Headline';
import Form from '../../components/Form/Form';
import { DATA } from '../../constants/constants';

function Login() {
	const [users, setUsers] = useLocalStorage('users');

	const addUsers = (user: string): void => {
		if (users.find((el) => el.login === user)) {
			return;
		} else {
			setUsers([...users, { login: user }]);
		}
	};

	return (
		<SectionBlock className={styles.main__authPanel}>
			<Headline className={styles.authPanel__title}>{DATA.AUTH}</Headline>
			<Form
				name="login"
				onSubmitForm={addUsers}
				classNameFrom="authPanel__form"
				textButton={DATA.BUTTON_AUTH}
				placeholder={DATA.PLACEHOLDER_AUTH}
				classNameButton="authPanel__button"
			/>
		</SectionBlock>
	);
}

export default Login;
