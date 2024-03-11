import WritingByImage from "../../assets/img/writing.png";
import ProfileImage from "../../assets/img/Victor.jpeg";
import {
  Container,
  WritingBy,
  Description,
  PerfilImage,
  LinkContainer,
} from "./styles";

function Resume() {
  return (
    <Container>
      <div>
        <WritingBy>
          Escrito pelo{" "}
          <span>
            <img alt="WritingBy" src={WritingByImage} width={"50px"} />
          </span>
        </WritingBy>
        <h1>Victor Gabriel</h1>
        <Description>
          Sou um profissional formado em Análise e Desenvolvimento de Sistemas,
          trazendo mais de 3 anos de experiência notável em projetos de
          desenvolvimento de sites.{" "}
        </Description>
        <Description>
          Iniciei minha carreira na "Entenda Antes", onde desenvolvi habilidades
          essenciais em HTML, CSS, JavaScript, Angular 4 e Spring Boot. Destaco
          minha contribuição significativa na integração com o OneSignal e minha
          capacidade diária de criar diversas telas e funcionalidades para o
          sistema.
        </Description>
        <Description>
          Minha jornada inclui uma passagem pela Luby Software, onde dediquei
          meu tempo aprimorando habilidades em ReactJs, NodeJs, Micro serviços e
          Serverless. Destaco com orgulho a criação de uma funcionalidade
          semelhante ao Google Forms, oferecendo aos usuários a flexibilidade de
          criar formulários personalizados.
        </Description>
        <Description>
          Além disso, contribuir para um ambiente colaborativo na Luby foi uma
          experiência incrível. Estou animado para aplicar minha expertise e
          contribuir para desafios empolgantes em futuros projetos.
        </Description>

        <LinkContainer>
          <a href="https://github.com/VictorGabriel021" target="__blank">
            <i
              className="devicon-github-original"
              translate="yes"
              style={{ fontSize: "38px", marginRight: 10 }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
            target="__blank"
          >
            <i
              className="devicon-linkedin-plain"
              style={{ fontSize: "38px" }}
            />
          </a>
        </LinkContainer>
      </div>

      <div style={{ textAlign: "center", alignSelf: "center" }}>
        <PerfilImage alt="Victor Gabriel" src={ProfileImage} />
      </div>
    </Container>
  );
}

export default Resume;
