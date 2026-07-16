import SectionHead from './SectionHead';
import './styles/Education.scss';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="reveal">
        <SectionHead id="education" title="Образование" />
        <div className="edu">
          <div className="edu__place">
            Технологический колледж РГАУ-МСХА им. Тимирязева
          </div>
          <p className="edu__spec">
            Специальность «Информационные системы и программирование».
          </p>
          <p className="edu__extra">
            <span className="edu__plus">+</span> множество курсов на платформе
            Stepik по C#, React и др.
          </p>
        </div>
      </div>
    </section>
  );
}
