import './App.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <div className="profile-picture"></div>
        <div className="titles-container">
          <h1 className="title">Lanai Conceição</h1>
          <h2 className="subtitle">Web Development Student</h2>
        </div>
      </header>

      <main className="button-container">
        <Button
          icon={<FaLinkedin className="icon" />}
          link="https://www.linkedin.com/in/lanai-caroline/"
          className="link-button"
          id="LinkedIn"
        />
        <Button
          icon={<FaGithub className="icon" />}
          link="https://github.com/lanaiconceicao"
          className="link-button"
          id="GitHub"
        />
        <Button
          icon={<FiMail className="icon" />}
          link="mailto:conceicaolanai@gmail.com"
          className="link-button"
          id="Email"
        />
      </main>
      <footer>
        <span className="span-footer">Developed by <a href="https://github.com/lanaiconceicao/portfolio-lanai">Lanai</a> ♥</span>
      </footer>
    </div>
  );
}

export default App;
