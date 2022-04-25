import Menu from "./components/Header";
import './App.css';
import LogoContainer from "./components/LogoContainer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="container-app">
      <Menu />

      <LogoContainer />

      <main className="container-main">
        <Intro />

        <Projects />

        <Footer />

      </main>
    </section>
  );
}

export default App;
