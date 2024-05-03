import './Navigation.css';

function Navigation() {
	return (
		<nav className="header__nav">
			<a href="#" className="header__search-flims">
				Поиск фильмов
			</a>
			<div className="header__favorites">
				<a href="#" className="header__favorites-link">
					Мои фильмы
				</a>
				<div className="header__favorites-count">0</div>
			</div>
			<a href="#" className="header__sign-in">
				Войти
				<img src="/sign-in.png" alt="sign-in icon" />
			</a>
		</nav>
	);
}

export default Navigation;
