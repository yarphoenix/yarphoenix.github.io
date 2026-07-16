import SectionHead from './SectionHead';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="reveal">
        <SectionHead id="projects" title="Проекты" />
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
