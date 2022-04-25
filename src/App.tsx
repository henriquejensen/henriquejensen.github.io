import Menu from "./components/Header";
import './App.css';
import LogoContainer from "./components/LogoContainer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

function App() {
  return (
    <section className="container-app">
      <Menu />

      <LogoContainer />

      <main className="container-main">
        <Intro />

        <Projects />
        <footer>
          <section>
            <p>Henrique Jensen 2022</p>
          </section>
        </footer>
      </main>
    </section>
  );
}

export default App;
