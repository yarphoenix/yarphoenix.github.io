import Slider from './Slider';
import './styles/Project.scss';

function Heading({ heading }) {
  const { logo, alt, logoWidth, logoHeight, href, linkLabel, tooltip, badge, title } =
    heading;

  const logoImg = logo ? (
    <img
      className="project__logo"
      src={logo}
      alt={alt}
      style={{ height: logoHeight, width: logoWidth }}
    />
  ) : null;

  const titleText = title ? (
    <span className="project__title">{title}</span>
  ) : null;

  // Логотип + пометка «в разработке», без ссылки
  if (badge) {
    return (
      <div className="project__logogroup">
        {logoImg}
        <span className="project__badge">{badge}</span>
      </div>
    );
  }

  // Ссылка с всплывающей подсказкой
  if (href) {
    return (
      <div className="linkgroup">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkLabel}
        >
          {logoImg || titleText}
        </a>
        {tooltip && <span className="linkgroup__tooltip">{tooltip}</span>}
      </div>
    );
  }

  return logoImg || titleText;
}

export default function ProjectCard({ project }) {
  const { heading, meta, desc, tech, slides } = project;

  return (
    <article className="project">
      <div className="project__head">
        <Heading heading={heading} />
        <span className="project__meta">{meta}</span>
      </div>
      <p className="project__desc">{desc}</p>
      <div className="project__tech">
        {tech.map((t) => (
          <span key={t} className="project__tech-item">
            {t}
          </span>
        ))}
      </div>
      <Slider slides={slides} />
    </article>
  );
}
