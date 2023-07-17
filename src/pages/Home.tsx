import { lazy } from "react";

const Menu = lazy(() => import("../components/Header"));
const LogoContainer = lazy(() => import("../components/LogoContainer"));
const Intro = lazy(() => import("../components/Intro"));
const Projects = lazy(() => import("../components/Projects"));
const Footer = lazy(() => import("../components/Footer"));
const MyToggle = lazy(() => import("../components/Toggle"));

function Home() {
  return (
    <section className="container-app">
      <Menu />

      <MyToggle />

      <LogoContainer />

      <main className="container-main">
        <Intro />

        <Projects />

        <Footer />
      </main>
    </section>
  );
}

export default Home;
