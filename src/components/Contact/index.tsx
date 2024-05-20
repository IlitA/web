import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from '../Link';
import { ContactComponent, ContactItem, ContactList } from './styles';
import { SubTitle } from "../../commonStyles";

export const Contact = () => {
  return (
    <ContactComponent>
      <SubTitle>Contact me</SubTitle>

      <ContactList>
        <ContactItem>
          <MdEmail />
          <Link to="mailto:imilitamar@gmail.com">Email</Link>
        </ContactItem>

        <ContactItem>
          <FaLinkedin />
          <Link target="_blank" to="https://www.linkedin.com/in/ilitam/">LinkedIn</Link>
        </ContactItem>

        <ContactItem>
          <FaGithub />
          <Link target="_blank" to="https://github.com/IlitA">GitHub</Link>
        </ContactItem>
      </ContactList>
    </ContactComponent>
  );
};
