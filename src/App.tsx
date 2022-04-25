import Menu from "./components/Header";
import Project from "./images/project.svg";
import './App.css';
import LogoContainer from "./components/LogoContainer";
import Intro from "./components/Intro";

function App() {
  return (
    <section className="container-app">
      <Menu />

      <LogoContainer />

      <main className="container-main">
        <Intro />
        <section>
          <h2>Projects</h2>
          <section>
            <div>
              <h1>Project Name</h1>
              <p>
                I created this personal project in order to show how to create
                an interface in Figma using a portfolio as an example.
              </p>
              <a type="button" href="google.com">
                View Project
              </a>
            </div>
            <div>
              <img src={Project} alt="" />
            </div>
          </section>
        </section>
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
