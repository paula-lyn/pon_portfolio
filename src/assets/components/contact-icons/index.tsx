import FacebookIcon from "../../icons/facebook";
import GithubIcon from "../../icons/github";
import InstagramIcon from "../../icons/instagram";
import LinkedInIcon from "../../icons/linkedin";

import "./style.css";

function ContactIconComponent() {
  return (
    <div className="contact-icons px-5">
      <a
        href="https://www.facebook.com/paulalyn.bagagunio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon color="" />
      </a>
      <a
        href="https://github.com/paula-lyn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon color="" />
      </a>
      <a
        href="https://www.instagram.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon color="" />
      </a>
      <a
        href="https://www.linkedin.com/in/paula-lyn-bagagunio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon color="" />
      </a>
    </div>
  );
}

export default ContactIconComponent;
