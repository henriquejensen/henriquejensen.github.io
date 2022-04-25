
import styles from './Card.module.css'

interface CardInterface {
  image: string,
  alt: string,
  projectName: string,
  projectDescription: string,
  projectLink: string
}

export default function Card({ image, alt, projectName, projectDescription, projectLink }: CardInterface) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>{projectName}</h1>
        <p>
          {projectDescription}
        </p>
        <a type="button" href={projectLink} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
      <div className={styles.image}>
        <img src={image} alt={alt} />
      </div>
    </section>
  )
}
