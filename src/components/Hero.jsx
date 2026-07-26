import { GithubIcon, LinkedinIcon } from '../icons.jsx';

const Hero = () => {
  return (
    <div className="wrap hero">
      <div className="hero-flag">
        Open for
        <br />
        freelance
      </div>
      <div className="folio">Issue No. 01 — Portfolio</div>
      <div className="hero-title-wrap">
        <div className="behind"></div>
        <h1 className="title">
          Luis Troy
          <br />
          Paraiso
        </h1>
      </div>
      <p className="role">Software Developer — Philippines</p>
      <p className="lede-lg">
        I build web apps, on-device AI companions, and the automations that connect them — from React interfaces to
        local LLM agents and n8n workflows.
      </p>

      <div className="cta-row">
        <a className="btn solid" href="#prints">
          View Prints
        </a>
        <a className="btn" href="#order">
          Get in Touch
        </a>
      </div>

      <div className="social-row">
        <a href="https://github.com/Brunfjell-Halfbor" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GithubIcon width={18} height={18} />
        </a>
        <a
          href="https://linkedin.com/in/luis-troy-paraiso"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon width={18} height={18} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
