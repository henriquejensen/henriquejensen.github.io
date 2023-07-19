import { lazy } from "react";
import styles from "./Home.module.css";

const Menu = lazy(() => import("../components/Header"));
const Intro = lazy(() => import("../components/Intro"));
const Projects = lazy(() => import("../components/Projects"));

function Home() {
  return (
    <section className={styles.container}>
      <Menu />

      <main className={styles.main}>
        <Intro />

        <Projects />
      </main>
    </section>
  );
}

export default Home;
