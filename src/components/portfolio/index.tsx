import Tes1 from "../../assets/img/portfolio2.png";
import { Container } from "./styles";
import { NodeIcon, ReactIcon } from "../icons";
import PortFolioItem from "./components/item";

function Portfolio() {
  return (
    <Container>
      <PortFolioItem
        imgSrc={Tes1}
        title="Teste projeto"
        linkProject="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
        linkRepo="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
        tecnologies={
          <>
            <ReactIcon height={30} width={30} />
            <NodeIcon height={30} width={30} />
          </>
        }
      />
      <PortFolioItem
        imgSrc={Tes1}
        title="Teste projeto"
        linkProject="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
        linkRepo="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
        tecnologies={
          <>
            <ReactIcon height={30} width={30} />
            <NodeIcon height={30} width={30} />
          </>
        }
      />
      <PortFolioItem
        imgSrc={Tes1}
        title="Teste projeto"
        linkProject="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
        linkRepo="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
        tecnologies={
          <>
            <ReactIcon height={30} width={30} />
            <NodeIcon height={30} width={30} />
          </>
        }
      />
      <PortFolioItem
        imgSrc={Tes1}
        title="Teste projeto"
        linkProject="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
        linkRepo="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
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
