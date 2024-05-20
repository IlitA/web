import { AboutMe } from "../../components/AboutMe";
import { Contact } from "../../components/Contact";
import { HomePage } from "./styles";

export const Home = () => {
  return (
    <HomePage>
      <AboutMe />

      {/* skills, stack and tools */}

      <Contact />
    </HomePage>
  );
};
