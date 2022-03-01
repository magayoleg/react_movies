import style from './Header.module.sass';

function Header() {
  return (
    <nav className="cyan darken-2">
      <div className="nav-wrapper">
        <a href="!#" className="brand-logo">
          Site about Movies, Series and Games
        </a>
        <ul
          id="nav-mobile"
          className={`right ${style['hide-on-med-and-down']}`}
        >
          <li>
            <a href="https://github.com/magayoleg" rel="noopener">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
