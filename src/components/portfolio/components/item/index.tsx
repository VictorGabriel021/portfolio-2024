import CustomizedButtons from "../../../Button";
import { ButtonContainer, Informations } from "./styles";

interface IPortFolioItem {
  imgSrc: string;
  title: string;
  linkRepo: string;
  linkProject: string;
  tecnologies: any;
}

const PortFolioItem: React.FC<IPortFolioItem> = ({
  imgSrc,
  title,
  linkProject,
  linkRepo,
  tecnologies: Tecnologies,
}) => {
  return (
    <div>
      <img src={imgSrc} alt={title} width="100%" />
      <Informations>
        <div style={{ display: "flex", gap: 5 }}>{Tecnologies}</div>
        <p style={{ padding: "0 20px" }}>{title}</p>
        <ButtonContainer>
          <CustomizedButtons>
            <a href={linkProject} target="__blank">
              Ver Projeto
            </a>
          </CustomizedButtons>
          <CustomizedButtons>
            <a href={linkRepo} target="__blank">
              &lt;Repositório/&gt;
            </a>
          </CustomizedButtons>
        </ButtonContainer>
      </Informations>
    </div>
  );
};

export default PortFolioItem;
