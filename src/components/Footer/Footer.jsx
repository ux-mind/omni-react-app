import './footer.scss';
import Button from '../Button/Button.jsx';

const Footer = () => (
  <footer>
    <div className="footer-separate" />
    <h2>
      OMNI is your personal time capsule.
      <br />
      We will protect and preserve your most precious memories
    </h2>
    <div className="footer-input-box">
      <div className="input-with-icon">
        <img src="/src/assets/icons/mailIcon.svg" alt="mail" />
        <input type="email" name="email" placeholder="Enter your email" />
      </div>
      <Button title="Submit" />
    </div>
    <p>
      OMNI is a time capsule that will
      preserve and protect the most cherished
      and precious sound memories of people.
    </p>
    <ul>
      <li>
        <a href="/">
          <img src="/src/assets/icons/linkedIdColorizedIcon.svg" alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="/">
          <img src="/src/assets/icons/twitterColorizedIcon.svg" alt="twitter" />
        </a>
      </li>
    </ul>
    <a href={import.meta.env.VITE_SOME_PRIVACY_POLICY_URL}>Privacy Policy</a>
  </footer>
);

export default Footer;
