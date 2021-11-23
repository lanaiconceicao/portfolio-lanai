import './App.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Button from './components/Button';

function App() {
  return (
    <>
      <div className="button-container">
        <Button
          icon={<FaLinkedin/>}
          link="https://www.linkedin.com/in/lanai-caroline/"
          className="link-button"
          id="LinkedIn"
        />
        <Button
          icon={<FaGithub/>}
          link="https://github.com/lanaiconceicao"
          className="link-button"
          id="GitHub"
        />
        <Button
          icon={<FiMail/>}
          link="mailto:conceicaolanai@gmail.com"
          className="link-button"
          id="Email"
        />
      </div>
    </>
  );
}

export default App;
