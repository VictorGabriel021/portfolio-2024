import { NodeIcon, ReactIcon } from "../icons";
import { Container, Content } from "./styles";
import { SiStyledcomponents } from "react-icons/si";

function Tecnologies() {
  return (
    <Container>
      <p style={{ fontSize: 20 }}>Skills</p>

      <Content>
        <div>
          <img
            alt="html5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            height={50}
            width={50}
          />
          <p>HTML5</p>
        </div>
        <div>
          <img
            alt="css3"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            height={50}
            width={50}
          />
          <p>CSS3</p>
        </div>
        <div>
          <img
            alt="javascript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            height={50}
            width={50}
          />
          <p>Javascript</p>
        </div>
        <div>
          <img
            alt="typescript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            height={50}
            width={50}
          />
          <p>Typescript</p>
        </div>
        <div>
          <img
            alt="nextjs"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            height={50}
            width={50}
          />
          <p>NextJs</p>
        </div>
        <div>
          <ReactIcon />
          <p>React</p>
        </div>
        <div>
          <NodeIcon />
          <p>NodeJs</p>
        </div>
        <div>
          <img
            alt="Spring Boot"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
            height={50}
            width={50}
          />
          <p>Spring Boot</p>
        </div>
        <div>
          <img
            alt="bootstrap"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            height={50}
            width={50}
          />
          <p>Bootstrap</p>
        </div>
        <div>
          <SiStyledcomponents size={32} />
          <p>Styled-Components</p>
        </div>
        <div>
          <img
            alt="tailwindcss"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            height={50}
            width={50}
          />
          <p>Tailwindcss</p>
        </div>
        <div>
          <img
            alt="redux"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
            height={50}
            width={50}
          />
          <p>Redux</p>
        </div>
        <div>
          <img
            alt="git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            height={50}
            width={50}
          />
          <p>Git</p>
        </div>
        <div>
          <i className="devicon-github-original" style={{ fontSize: 50 }} />
          <p>Github</p>
        </div>
        <div>
          <img
            alt="sql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
            height={50}
            width={50}
          />
          <p>SQL</p>
        </div>
        <div>
          <img
            alt="postgresql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            height={50}
            width={50}
          />
          <p>Postgresql</p>
        </div>
        <div>
          <img
            alt="mysql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            height={50}
            width={50}
          />
          <p>Mysql</p>
        </div>
      </Content>
    </Container>
  );
}

export default Tecnologies;
