import Nav from "../Navigation/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
import logo from "../../assets/images/footer-logo.png";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://www.github.com/sureskills",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sureskills/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@sureskills",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/sureskills",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerImgWrapper">
          <img src={logo} alt="logo"></img>
        </div>
        <Nav className="footerNav" />
        <div className="footerContact">
          <span>Contacts:</span>
          <span>Address</span>
          <span>Phone number</span>
          <span>example@mail.com</span>
        </div>
        <div className="footerLinks">
          <span>Our Social Media:</span>
          <div>
            {socials.map(({ icon, url }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} size="2x" key={url} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
