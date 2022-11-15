import { Link } from 'react-router-dom';
import LogoWithText from '../../assets/LogoWithText.jsx';
import './header.scss';
import LinkedinIcon from '../../assets/icons/LinkedinIcon.jsx';
import TwitterIcon from '../../assets/icons/TwitterIcon.jsx';
import Button from '../Button/Button.jsx';
import { COMING_SOON_ROUTE, MAIN_ROUTE } from '../../utils/constants.js';

/* eslint-disable jsx-a11y/control-has-associated-label */
const Header = () => (
  <header className="header">
    <div className="header-container">
      <Link to={MAIN_ROUTE}>
        <LogoWithText />
      </Link>

      <ul className="header-list">
        <li><a href={import.meta.env.VITE_SOME_LINKEDIN_URL || '/'}><LinkedinIcon /></a></li>
        <li><a href={import.meta.env.VITE_SOME_TWITTER_URL || '/'}><TwitterIcon /></a></li>
        <Link to={COMING_SOON_ROUTE}>
          <Button className="header-btn" title="Download the app" />
        </Link>
      </ul>
    </div>
  </header>
);

export default Header;
