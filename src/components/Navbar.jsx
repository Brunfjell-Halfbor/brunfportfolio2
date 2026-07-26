import { useTheme } from '../hooks/useTheme.js';
import { SunIcon, MoonIcon } from '../icons.jsx';

const Navbar = () => {
  const { theme, toggle } = useTheme();

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <a href="#" className="wordmark">
          Brunfjell
        </a>
        <nav className="navlinks">
          <a href="#toolkit">Toolkit</a>
          <a href="#prints">Prints</a>
          <a href="#colophon">Colophon</a>
          <a href="#timeline">Timeline</a>
          <a href="#order">Contact</a>
        </nav>
        <button className="theme-btn" onClick={toggle} aria-label="Toggle color theme" type="button">
          {theme === 'dark' ? <MoonIcon width={16} height={16} /> : <SunIcon width={16} height={16} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
