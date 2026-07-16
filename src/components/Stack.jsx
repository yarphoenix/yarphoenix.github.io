import SectionHead from './SectionHead';
import './styles/Stack.scss';

const CATEGORIES = [
  { name: 'backend', items: ['C#', 'ASP.NET Core', 'EF Core', 'FluentValidation', 'Serilog'] },
  { name: 'data', items: ['PostgreSQL', 'MySQL'] },
  { name: 'Infrastructure', items: ['Docker', 'VPS / Beget', 'Git'] },
  { name: 'frontend', items: ['React', 'RTK Query', 'Redux Toolkit', 'JavaScript', 'SCSS / BEM'] },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="reveal">
        <SectionHead id="stack" title="Стек" />
        <div className="stack__grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="stack__cell">
              <h3 className="stack__cat">{cat.name}</h3>
              <div className="stack__tags">
                {cat.items.map((item) => (
                  <span key={item} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
