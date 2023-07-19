import { projects } from "../contants";
import Project from "../images/project.svg";
import Card from "./Card";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <Card
            key={project.id}
            image={project.image}
            alt={project.title}
            projectName={project.title}
            projectDescription={project.description}
            projectLink={project.link}
          />
        ))}
      </div>
    </section>
  );
}
