import github from '../assets/img/github.png';
import './styles/Header.scss';

const NAV = ['about', 'stack', 'projects', 'education', 'contact'];

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a
          className="header__brand"
          href="https://github.com/yarphoenix"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub — yarphoenix"
        >
          <img className="header__logo-img" src={github} alt="GitHub" />
          <span className="header__divider" />
          <span className="header__name">Ярослав Извеков</span>
        </a>
        <nav className="nav">
          {NAV.map((id) => (
            <a key={id} className="nav__link" href={`#${id}`}>
              /{id}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
