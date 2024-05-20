import { SiJavascript, SiTypescript, SiReact, SiRedux, SiWebpack, SiCss3, SiHtml5, SiJquery, SiSass, SiStyledcomponents } from "react-icons/si";
import { SkillsComponent } from './styles';
import { SubTitle, Text } from '../../commonStyles';

const skillList = [
  { icon: <SiTypescript />, label: 'Typescript' },
  { icon: <SiJavascript />, label: 'Javascript' },
  { icon: <SiReact />, label: 'React' },
  { icon: <SiRedux />, label: 'Redux / Zustand' },
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiCss3 />, label: 'CSS3' },
  { icon: <SiStyledcomponents />, label: 'styled-components' },
  { icon: <SiSass />, label: 'Sass' },
  { icon: <SiJquery />, label: 'JQuery' },
  { icon: <SiWebpack />, label: 'Webpack' },
  // { icon: <BiStar />, label: '...' },
]
export const MySkills = () => {
  return (
    <SkillsComponent>
      <SubTitle>My skills</SubTitle>

      <ul>
        {skillList.map(skill => (
          <li>
            <i>{skill.icon}</i>
            <Text>{skill.label}</Text>
          </li>
        ))}
      </ul>
    </SkillsComponent>
  );
};
