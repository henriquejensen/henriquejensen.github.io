import styles from './Intro.module.css';

const LINKEDIN = 'https://br.linkedin.com/in/henriquejensen';
const GITHUB = 'https://github.com/henriquejensen'

export default function Intro() {



  return (
    <section className={styles.container}>
      <h2>Front end Engineer</h2>
      <section className={styles.card}>
        <h1>Hello, my name is Henrique Jensen</h1>
        <p>
          I have been working as Front end since 2015.
          I like to build UI with <span>React</span>, test with <span>RTL</span>,
          managing the state using <span>Redux</span> or <span>React Context</span> and add styles with <span>Styled Components</span>.
        </p>
        <div>
          <a type="button" href={GITHUB} target="_blank" rel="noreferrer" >
            Github
          </a>
          <a type="button" href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

    </section>
  )
}
