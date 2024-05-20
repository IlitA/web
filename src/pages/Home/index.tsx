import { Contact } from "../../components/Contact";
import { HomePage, SubTitle, Title } from "./styles";

export const Home = () => {
  return (
    <HomePage>
      <div>
        {/* intro + about me */}
        <Title>Hey There</Title>
        <SubTitle>... Coming soon</SubTitle>
      </div>

      {/* skills, stack and tools */}

      <Contact />
    </HomePage>
  );
};
