import Welcome from "../components/welcome";
import Portfolio from "../components/portfolio";
import Resume from "../components/resume";
import Tecnologies from "../components/Tecnologies";

function Home() {
  return (
    <div>
      <Welcome />
      <Portfolio />
      <Resume />
      <Tecnologies />
    </div>
  );
}

export default Home;
