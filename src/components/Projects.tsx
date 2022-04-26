import Project from "../images/project.svg";
import Card from "./Card";
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2>Projects</h2>
      <Card
        image={Project}
        alt="project logo"
        projectName="Project Name"
        projectDescription="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
        projectLink="google.com"
      />
    </section>
  )
}
