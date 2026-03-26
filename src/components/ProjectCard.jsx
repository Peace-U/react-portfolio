function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div>
        <a href={project.demo} target="_blank">Live Demo</a>

        {" | "}

        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;