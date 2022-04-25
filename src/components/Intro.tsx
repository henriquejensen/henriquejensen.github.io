import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section className={styles.container}>
      <h2>Front end Engineer</h2>
      <section className={styles.card}>
        <h1>Hello, my name is Henrique Jensen</h1>
        <p>
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div>
          <a type="button" href="google.com">
            Project
          </a>
          <a type="button" href="google.com">
            LinkedIn
          </a>
        </div>
      </section>

    </section>
  )
}
