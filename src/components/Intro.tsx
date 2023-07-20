import { profile } from "../contants";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.container}>
      <div className={styles.subtitle}>
        {profile.mainStack.map((stack) => (
          <span key={stack}>
            <span>{stack}</span>
            <hr />
          </span>
        ))}
      </div>
      <h2>{profile.name}</h2>
      <section className={styles.card}>
        <p>{profile.description}</p>
        <div>
          <a
            type="button"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            type="button"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </section>
  );
}
