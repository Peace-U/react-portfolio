import { useState } from "react";
import projects from "../data/Projects";

function Projects() {

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(project => project.category === filter);

  return (
    <section>
      <h2>Projects</h2>

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("React")}>React</button>
      <button onClick={() => setFilter("JavaScript")}>JavaScript</button>

      {filteredProjects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}

    </section>
  );
}

export default Projects;