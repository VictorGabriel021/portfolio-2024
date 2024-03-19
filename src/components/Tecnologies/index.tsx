import {
  BootstrapIcon,
  CssIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  MysqlIcon,
  NextjsIcon,
  NodeIcon,
  PostgresqlIcon,
  ReactIcon,
  ReduxIcon,
  SpringBootIcon,
  SqlIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "../icons";
import { Container, Content } from "./styles";
import { SiStyledcomponents } from "react-icons/si";

function Tecnologies() {
  return (
    <Container>
      <p style={{ fontSize: 20 }}>Skills</p>

      <Content>
        <div>
          <HtmlIcon />
          <p>HTML5</p>
        </div>
        <div>
          <CssIcon />
          <p>CSS3</p>
        </div>
        <div>
          <JavascriptIcon />
          <p>Javascript</p>
        </div>
        <div>
          <TypescriptIcon />
          <p>Typescript</p>
        </div>
        <div>
          <NextjsIcon />
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
          <SpringBootIcon />
          <p>Spring Boot</p>
        </div>
        <div>
          <BootstrapIcon />
          <p>Bootstrap</p>
        </div>
        <div>
          <SiStyledcomponents size={32} />
          <p>Styled-Components</p>
        </div>
        <div>
          <TailwindcssIcon />
          <p>Tailwindcss</p>
        </div>
        <div>
          <ReduxIcon />
          <p>Redux</p>
        </div>
        <div>
          <GitIcon />
          <p>Git</p>
        </div>
        <div>
          <GithubIcon />
          <p>Github</p>
        </div>
        <div>
          <SqlIcon />
          <p>SQL</p>
        </div>
        <div>
          <PostgresqlIcon />
          <p>Postgresql</p>
        </div>
        <div>
          <MysqlIcon />
          <p>Mysql</p>
        </div>
      </Content>
    </Container>
  );
}

export default Tecnologies;
