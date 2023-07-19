import styles from "./Intro.module.css";

const LINKEDIN = "https://br.linkedin.com/in/henriquejensen";
const GITHUB = "https://github.com/henriquejensen";

export default function Intro() {
  return (
    <section className={styles.container}>
      <div className={styles.subtitle}>
        <span>React</span>
        <hr />
        <span>TypeScript</span>
        <hr />
        <span>NodeJs</span>
      </div>
      <h2>Henrique Jensen</h2>
      <section className={styles.card}>
        <p>
          I'm a Front-End Engineer, I have more than 6 years of professional
          experience and really love what I do. Currently most focused in
          Frontend Development, with skills in popular technologies, such as{" "}
          <span>React</span>, <span>RTL</span>, <span>Redux</span>,{" "}
          <span>Typescript</span> and <span>NodeJs</span>.
        </p>
        <div>
          <a type="button" href={GITHUB} target="_blank" rel="noreferrer">
            Github
          </a>
          <a type="button" href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </section>
  );
}
