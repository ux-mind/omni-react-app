import './footer.scss';
import { useRef, useState } from 'react';
import * as EmailValidator from 'email-validator';
import Button from '../Button/Button.jsx';

const Footer = () => {
  const [email, setEmail] = useState('');
  const emailRef = useRef();

  const sendMail = () => {
    if (!EmailValidator.validate(email) || email === '') {
      console.log('Error input');
    }

    // const response = await axios.post(PHP_URL, mailData);
    console.log(email);
  };

  return (
    <footer>
      <div className="footer-separate" />
      <h2>
        OMNI is your personal time capsule.
        <br />
        We will protect and preserve your most precious memories
      </h2>
      <div className="footer-input-box">
        <div className="input-with-icon">
          <img src="/assets/icons/mailIcon.svg" alt="mail" />
          <input
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <button onClick={() => sendMail()} className="btn footer-btn" type="button">
          <span>Submit</span>
        </button>
      </div>
      <Button className="footer-btn-second" title="Submit" />
      <p>
        OMNI is a time capsule that will
        preserve and protect the most cherished
        and precious sound memories of people.
      </p>
      <ul>
        <li>
          <a href={import.meta.env.VITE_SOME_LINKEDIN_URL || '/'} target="_blank" rel="noreferrer">
            <img src="/assets/icons/linkedIdColorizedIcon.svg" alt="linkedin" />
          </a>
        </li>
        <li>
          <a href={import.meta.env.VITE_SOME_TWITTER_URL || '/'} target="_blank" rel="noreferrer">
            <img src="/assets/icons/twitterColorizedIcon.svg" alt="twitter" />
          </a>
        </li>
      </ul>
      <a href={import.meta.env.VITE_SOME_PRIVACY_POLICY_URL || '/'} target="_blank" rel="noreferrer">Privacy Policy</a>
    </footer>
  );
};

export default Footer;
