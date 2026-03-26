import projects from "../data/Projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}

    </section>
  );
}

export default Projects;