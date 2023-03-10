import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import FooterDiv, {
  FooterContent,
  FooterFlex,
  FooterLogo,
  SocialIcons,
} from "./styles/Footer.styled";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContent>
        <div>
          <FooterLogo src="./images/logo_white.png" alt="" />
        </div>

        <FooterFlex>
          <ul>
            <li>1775 Tysons Blvd. 5th Floor. Tysos, VA 22102</li>
            <li> +1 (571) 360 66 77</li>
            <li> contact@clarusway.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons>
            <a href="http://www.twitter.com">
              <FaTwitterSquare />
            </a>
            <a href="http://www.facebook.com">
              <FaFacebookSquare />
            </a>
            <a href="http://www.linkedin.com">
              <FaLinkedin />
            </a>
          </SocialIcons>
        </FooterFlex>
      </FooterContent>
    </FooterDiv>
  );
};

export default Footer;
