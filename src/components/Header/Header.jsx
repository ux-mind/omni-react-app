import { Link } from 'react-router-dom';
import LogoWithText from '../../assetsJSX/LogoWithText.jsx';
import './header.scss';
import LinkedinIcon from '../../assetsJSX/LinkedinIcon.jsx';
import TwitterIcon from '../../assetsJSX/TwitterIcon.jsx';
// import Button from '../Button/Button.jsx';
import { MAIN_ROUTE } from '../../utils/constants.js';

/* eslint-disable jsx-a11y/control-has-associated-label */
const Header = () => (
  <header className="header">
    <div className="header-container">
      <Link to={MAIN_ROUTE}>
        <LogoWithText />
      </Link>

      <ul className="header-list">
        <li>
          <a
            target="_blank"
            href={
              import.meta.env.VITE_SOME_LINKEDIN_URL ||
              'https://www.linkedin.com/in/be-the-ball/'
            }
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href={
              import.meta.env.VITE_SOME_TWITTER_URL ||
              'https://twitter.com/omnibroadcast'
            }
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </li>
        {/* <Button
          className="header-btn"
          title="Download the app"
          link={COMING_SOON_ROUTE}
        /> */}
      </ul>
    </div>
  </header>
);

export default Header;
