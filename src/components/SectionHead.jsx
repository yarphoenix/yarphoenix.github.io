export default function SectionHead({ id, title }) {
  return (
    <div className="section-head">
      <a
        className="section-head__hash"
        href={`#${id}`}
        aria-label={`Якорь: ${title}`}
      >
        #
      </a>
      <h2 className="section-head__title">{title}</h2>
    </div>
  );
}
