import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Mohamed. Connect on{" "}
        <a
          href="https://www.linkedin.com/in/mohamed-esmat-abdalhafiz-frontend-developer/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaLinkedin style={{ verticalAlign: "middle" }} /> LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
