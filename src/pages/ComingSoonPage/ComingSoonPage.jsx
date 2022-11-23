import './comingSoonPage.scss';
import { useState } from 'react';
import axios from 'axios';
import * as EmailValidator from 'email-validator';
import Input from '../../components/Input/Input.jsx';
import Checkbox from '../../components/Checkbox/Checkbox.jsx';
import Counter from '../../components/Counter/Counter.jsx';

const PHP_URL = '../send.php';

const itemsForDropdown = [
  {
    id: 1,
    title: 'Interest',
  },
  {
    id: 2,
    title: 'Broadcasting',
  },
  {
    id: 3,
    title: 'Listening',
  },
  {
    id: 4,
    title: 'Partnering',
  },
];

const ComingSoonPage = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);
  const [type, setType] = useState('interest');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const checkBeforeMailSend = async () => {
    if (!EmailValidator.validate(email) || email === '' || !isChecked) {
      setIsError(true);
      return setShowPopup(true);
    }
    setIsError(false);

    const mailData = {
      userType: type,
      email,
      message,
    };

    // const response = await axios.post(PHP_URL, mailData);
    console.log(mailData);
  };

  return (
    <main className="comingSoon-section">
      <div className="comingSoon-box">
        <div className="comingSoon-box-left">
          <h2>The future of audio is coming</h2>
          <p>Send your request and we will answer you</p>
          <form className="form-frame">
            <Input
              className="input-sizing"
              type="dropdown"
              title="User type"
              placeholder="Interest"
              itemsForDropdown={itemsForDropdown}
              setItem={setType}
            />
            <Input
              className="input-sizing"
              title="Email"
              placeholder="you@.com"
              setIsError={setIsError}
              setItem={setEmail}
            />
            <Input
              className="input-sizing"
              type="text-area"
              title="Message"
              height={125}
              setItem={setMessage}
            />
            <Checkbox
              className="input-sizing checkbox"
              setIsChecked={setIsChecked}
              isChecked={isChecked}
            />
            <button
              disabled={!isChecked}
              className={`btn btn-sizing ${isChecked || 'disabled-btn'}`}
              type="button"
              onClick={() => {
                if (isChecked) {
                  checkBeforeMailSend();
                  setShowPopup(true);
                }
              }}
            >
              <span>Send</span>
            </button>
            {showPopup && (
              <div className="success-popup">
                <img src={isError ? '/assets/icons/error.svg' : '/assets/icons/success.svg'} alt="icon" />
                <p>{isError ? 'OPS! Something went wrong' : 'EPIC! WE WILL BE IN TOUCH'}</p>
                <button className="btn popup-btn" type="button" onClick={() => setShowPopup(false)}>
                  <span>{isError ? 'Try again' : 'Great!'}</span>
                </button>
              </div>
            )}
          </form>

        </div>
        <div className="comingSoon-box-right">
          <h1>Newchip Investor Day Presentation</h1>
          <Counter />
        </div>
      </div>
    </main>
  );
};

export default ComingSoonPage;
