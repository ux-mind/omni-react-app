import LogoWithText from '../../assets/LogoWithText.jsx';
import './header.scss';
import LinkedinIcon from '../../assets/icons/LinkedinIcon.jsx';
import TwitterIcon from '../../assets/icons/TwitterIcon.jsx';
import Button from '../Button/Button.jsx';

/* eslint-disable jsx-a11y/control-has-associated-label */
const Header = () => (
  <header className="header">
    <div className="header-container">
      <LogoWithText />

      <ul className="header-list">
        <li><a href="/"><LinkedinIcon /></a></li>
        <li><a href="/"><TwitterIcon /></a></li>
        <Button className="header-btn" title="Download the app" />
      </ul>
    </div>
  </header>
);

export default Header;
