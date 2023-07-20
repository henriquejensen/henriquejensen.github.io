import { Suspense, lazy } from "react";
import styles from "./Home.module.css";
import Loading from "../components/Loading";

const Menu = lazy(() => import("../components/Header"));
const Intro = lazy(() => import("../components/Intro"));
const Projects = lazy(() => import("../components/Projects"));

function Home() {
  return (
    <section className={styles.container}>
      <Suspense fallback={<Loading />}>
        <Menu />

        <main className={styles.main}>
          <Intro />

          <Projects />
        </main>
      </Suspense>
    </section>
  );
}

export default Home;
