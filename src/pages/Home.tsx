import Menu from "../components/Header";
import LogoContainer from "../components/LogoContainer";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import MyToggle from "../components/Toggle";

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
