import { GithubIcon, LinkedinIcon } from '../icons.jsx';

const Footer = () => {
  return (
    <footer className="wrap">
      <span>© 2026 Luis Troy Paraiso</span>
      <div className="social-row" style={{ marginTop: 0 }}>
        <a
          href="https://github.com/Brunfjell-Halfbor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ width: 32, height: 32 }}
        >
          <GithubIcon width={15} height={15} />
        </a>
        <a
          href="https://linkedin.com/in/luis-troy-paraiso"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ width: 32, height: 32 }}
        >
          <LinkedinIcon width={15} height={15} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
