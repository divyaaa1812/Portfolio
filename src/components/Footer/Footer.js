import "./Footer.css";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";
import fbIcon from "../../images/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <a href="#" className="footer__cp-text">
          © Divya Bharathi Badugu
        </a>
      </div>
      <nav className="footer__nav">
        <ul className="footer__nav-icons">
          <a
            href="https://github.com/divyaaa1812"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="click to open github account"
              className="footer__github-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/divyabharathi-badugu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="click to open divya's linkedin profile"
              className="footer__linkedin-icon"
            />
          </a>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
