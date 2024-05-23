import NlwImage from "../../assets/img/nlw.png";
import ExoticImage from "../../assets/img/exotic.png";
import GithubImage from "../../assets/img/github.png";
import GridlayoutImage from "../../assets/img/gridlayout.png";
import FlexboxImage from "../../assets/img/flexbox.png";
import BurgerAppImage from "../../assets/img/burger-app.png";
import VipTechImage from "../../assets/img/vip-tech-manager.png";

import { Container } from "./styles";
import {
  CssIcon,
  HtmlIcon,
  TypescriptIcon,
  NextjsIcon,
  ReactIcon,
  VueJsIcon,
  ReduxIcon,
} from "../icons";

import { SiStyledcomponents } from "react-icons/si";

import PortFolioItem from "./components/item";

function Portfolio() {
  return (
    <Container>
      <PortFolioItem
        imgSrc={BurgerAppImage}
        title="Desenvolvi um aplicativo de hamburgueria utilizando Vue.js com TypeScript. Os dados são persistidos no local storage. Apliquei o gerenciamento de rotas e controle de estado."
        linkProject="https://burger-app-vuejs.netlify.app/"
        linkRepo="https://github.com/VictorGabriel021/burger-app-vuejs"
        tecnologies={
          <>
            <VueJsIcon height={30} width={30} />
            <HtmlIcon height={30} width={30} />
            <CssIcon height={30} width={30} />
            <TypescriptIcon height={30} width={30} />
          </>
        }
      />
      <PortFolioItem
        imgSrc={VipTechImage}
        title="Desenvolvi um sistema de gerenciamento de usuários com funcionalidades de criação, edição, deleção e listagem. Usei Material UI para componentes de UI (inputs, forms, paginação), Formik e Yup para gerenciamento e validação de formulários, e Redux para gerenciar o estado da aplicação, com persistência dos dados no local storage."
        linkProject="https://vip-tech-manager.netlify.app/"
        linkRepo="https://github.com/VictorGabriel021/viptech-manager"
        tecnologies={
          <>
            <ReactIcon height={30} width={30} />
            <HtmlIcon height={30} width={30} />
            <CssIcon height={30} width={30} />
            <TypescriptIcon height={30} width={30} />
            <SiStyledcomponents color="white" size={32} />
            <ReduxIcon height={30} width={30} />
          </>
        }
      />
      <PortFolioItem
        imgSrc={NlwImage}
        title="Foi desenvolvido um sistema de controle de notas, permitindo a inserção de informações de maneira versátil, seja por meio de entrada textual ou pela integração com uma biblioteca de gravação de áudio, como a SpeechRecognitionAPI."
        linkProject="https://nlw-rocketseat5.netlify.app/"
        linkRepo="https://github.com/VictorGabriel021/nlw-reactjs"
        tecnologies={
          <>
            <ReactIcon height={30} width={30} />
            <HtmlIcon height={30} width={30} />
            <CssIcon height={30} width={30} />
            <TypescriptIcon height={30} width={30} />
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
            <NextjsIcon height={30} width={30} />
            <HtmlIcon height={30} width={30} />
            <CssIcon height={30} width={30} />
            <TypescriptIcon height={30} width={30} />
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
            <HtmlIcon height={30} width={30} />
            <CssIcon height={30} width={30} />
            <TypescriptIcon height={30} width={30} />
          </>
        }
      />
      <PortFolioItem
        imgSrc={GridlayoutImage}
        title="Foi desenvolvido uma landing page utilizando grid layout"
        linkProject="https://grid-blog.netlify.app/"
        linkRepo="https://github.com/VictorGabriel021/grid-blog"
        tecnologies={
          <>
            <HtmlIcon height={30} width={30} />
            <CssIcon height={30} width={30} />
          </>
        }
      />
      <PortFolioItem
        imgSrc={FlexboxImage}
        title="Foi desenvolvido uma landing page utilizando flex box"
        linkProject="https://flex-blog5.netlify.app"
        linkRepo="https://github.com/VictorGabriel021/flex-blog"
        tecnologies={
          <>
            <HtmlIcon height={30} width={30} />
            <CssIcon height={30} width={30} />
          </>
        }
      />
    </Container>
  );
}

export default Portfolio;
