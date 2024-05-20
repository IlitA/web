import { AboutMe } from "../../components/AboutMe";
import { Contact } from "../../components/Contact";
import { MySkills } from "../../components/Skills";
import { HomePage } from "./styles";

export const Home = () => {
  return (
    <HomePage>
      <AboutMe />
      <MySkills />
      <Contact />
    </HomePage>
  );
};
