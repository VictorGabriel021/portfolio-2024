import NlwImage from "../../assets/img/nlw.png";
import ExoticImage from "../../assets/img/exotic.png";
import GithubImage from "../../assets/img/github.png";
import { Container } from "./styles";
import { NodeIcon, ReactIcon } from "../icons";
import PortFolioItem from "./components/item";

function Portfolio() {
  return (
    <Container>
      <PortFolioItem
        imgSrc={NlwImage}
        title="Foi desenvolvido um sistema de controle de notas, permitindo a inserção de informações de maneira versátil, seja por meio de entrada textual ou pela integração com uma biblioteca de gravação de áudio, como a SpeechRecognitionAPI."
        linkProject="https://nlw-rocketseat5.netlify.app/"
        linkRepo="https://github.com/VictorGabriel021/nlw-reactjs"
        tecnologies={
          <>
            <ReactIcon height={30} width={30} />
            <NodeIcon height={30} width={30} />
          </>
        }
      />
      <PortFolioItem
        imgSrc={ExoticImage}
        title="Foi desenvolvido um sistema em NextJs, o sistema possui uma listagem de carros e as informações detalhadas"
        linkProject="https://exotic-cars5.netlify.app/"
        linkRepo="https://github.com/VictorGabriel021/exotic-cars-nextjs"
        tecnologies={
          <>
            <ReactIcon height={30} width={30} />
            <NodeIcon height={30} width={30} />
          </>
        }
      />
      <PortFolioItem
        imgSrc={GithubImage}
        title="Foi desenvolvido um sistema onde é possível acessar as informações do github, foi utilizado PWA para baixar a página como um aplicativo de celular"
        linkProject="https://luby-victor-gabriel.netlify.app/"
        linkRepo="https://github.com/VictorGabriel021/github-data"
        tecnologies={
          <>
            <ReactIcon height={30} width={30} />
            <NodeIcon height={30} width={30} />
          </>
        }
      />
    </Container>
  );
}

export default Portfolio;
