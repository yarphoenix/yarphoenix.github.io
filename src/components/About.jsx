import SectionHead from './SectionHead';
import './styles/About.scss';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="reveal">
        <SectionHead id="about" title="О себе" />
        <p className="about__lead">
          Занимаюсь программированием <b>~1 год</b>. Разрабатываю рабочие
          клиентские (React) и серверные сервисы на (ASP.NET Core). Ищу
          стажировку, где смогу расти в продакшн-команде.
        </p>
        <p className="about__body">
          Студент 3-го курса специальности «Информационные системы и
          программирование». Специализируюсь на fullstack'е:{' '}
          <b>React.js, Redux,</b> <b>ASP.NET Core, EF Core, PostgreSQL</b>.
          Серверные приложения запаковываются в Docker-контейнеры и отправляются
          на VPS (Beget в моём случае). Клиентские приложения хостятся на GitHub
          Pages или Vercel.
        </p>
      </div>
    </section>
  );
}
