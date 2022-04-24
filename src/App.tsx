import Menu from "./components/Header";
import Logo from "./images/my.svg";
import Project from "./images/project.svg";
import './App.css';

function App() {
  return (
    <section className="container-app">
      <Menu />

      <section>
        <img src="" alt="" />
      </section>

      <main>
        <section>
          <h3>Front end Engineer</h3>
          <h1>Hello, my name is Henrique Jensen</h1>
          <p>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div>
            <a type="button" href="google.com">
              Project
            </a>
            <a type="button" href="google.com">
              LinkedIn 3
            </a>
          </div>
          <img src={Logo} alt="" />
        </section>
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
