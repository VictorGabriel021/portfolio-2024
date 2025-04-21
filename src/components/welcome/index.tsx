import {
  Container,
  Salutation,
  Content,
  Description,
  ContainerDescription,
  Title,
  IconSpan,
} from "./styles";

function Welcome() {
  return (
    <Container>
      <Content>
        <Salutation>OI 👋 EU SOU O VICTOR GABRIEL</Salutation>
        <div>
          <Title fontSize={9}>
            FULL-STACK{" "}
            <IconSpan>
              <a href="https://github.com/VictorGabriel021" target="__blank">
                <i
                  className="devicon-github-original"
                  translate="yes"
                  style={{ fontSize: "7.2vw", marginRight: 10 }}
                />
              </a>
            </IconSpan>
            <IconSpan>
              <a
                href="https://www.linkedin.com/in/victor-gabriel-de-carvalho-paulino-800800151/"
                target="__blank"
              >
                <i
                  className="devicon-linkedin-plain"
                  style={{ fontSize: "7.2vw" }}
                />
              </a>
            </IconSpan>
          </Title>
        </div>
        <Title fontSize={12}>DEVELOPER</Title>

        <ContainerDescription>
          <Description>
            Com mais de 4 anos de experiência, atuo como desenvolvedor
            full-stack, trazendo comigo conhecimentos sólidos em front-end e back-end. Minha
            abordagem é direta e eficiente, focada em solucionar desafios de
            forma prática e funcional.
          </Description>
        </ContainerDescription>
      </Content>
    </Container>
  );
}

export default Welcome;
