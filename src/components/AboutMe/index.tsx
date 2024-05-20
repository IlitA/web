import { Text } from '../../theme';
import { AboutMeComponent, AboutContent, Title, LinkButton } from './styles';

export const AboutMe = () => {
  return (
    <AboutMeComponent>
      {/* intro + about me */}
      <Title>Hey There!</Title>

      <AboutContent>
        <Text $size={2}>I am Ilit,</Text><br />
        <Text $size={6} $hasGradient>Frontend Web Developer</Text><br />
        <Text $size={1.2}>I'm all about crafting cool, user-friendly websites and constantly learning new tech.</Text><br />
        {/* <Text $size={1.2}>Based in beautiful Barcelona</Text> */}
      </AboutContent>

      <LinkButton type="button" target="_blank" href="https://drive.google.com/file/d/1lENZ0kaRCuqfn0K2Iwy1Zrk5rMNElsAD">
        Get my CV
      </LinkButton>
    </AboutMeComponent>
  );
};
