import github from '../assets/img/github.png';
import postgre from '../assets/img/postgre.png';
import database from '../assets/img/database.png';
import physics from '../assets/img/physics.png';
import csharp from '../assets/img/c-sharp.png';
import js from '../assets/img/js.png';
import './styles/Hero.scss';

const ICONS = [
  { src: postgre, mod: 'postgre', depth: 0.28, dx: 0.8, top: '-4%', left: '64%' },
  { src: database, mod: 'database', depth: 0.48, dx: -0.8, top: '54%', left: '71%' },
  { src: physics, mod: 'physics', depth: 0.16, dx: 0.4, top: '9%', left: '43%' },
  { src: csharp, mod: 'csharp', depth: 0.6, dx: 1.2, top: '72%', left: '15%' },
  { src: js, mod: 'js', depth: 0.68, dx: 0.6, top: '80%', left: '47%' },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <a
        className="hero__gh"
        href="https://github.com/yarphoenix"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub — yarphoenix"
      >
        <img className="hero__gh-img" src={github} alt="GitHub" />
      </a>

      <div className="hero__icons" aria-hidden="true">
        {ICONS.map((icon) => (
          <div
            key={icon.mod}
            className="hero__icon"
            data-depth={icon.depth}
            data-dx={icon.dx}
            style={{ top: icon.top, left: icon.left }}
          >
            <img
              className={`hero__icon-img hero__icon-img--${icon.mod}`}
              src={icon.src}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="hero__inner">
        <h1 className="hero__title">
          <span className="hero__title-line">Ярослав</span>
          <span className="hero__title-line hero__title-line--outline">
            Извеков
          </span>
        </h1>
        <div className="hero__subtitle">fullstack: C#&nbsp;&amp;&nbsp;React.js</div>
      </div>

      <div className="hero__hint">
        <span className="hero__hint-label">листайте</span>
        <span className="hero__hint-arrow">↓</span>
      </div>
    </section>
  );
}
