import './formSection.scss';
import { useState } from 'react';
import * as EmailValidator from 'email-validator';
import axios from 'axios';
import Logo from '../../../assetsJSX/Logo.jsx';
import Input from '../../../components/Input/Input.jsx';
import Checkbox from '../../../components/Checkbox/Checkbox.jsx';

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

const FormSection = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);
  const [type, setType] = useState('interest');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const checkBeforeMailSend = async () => {
    if (
      !EmailValidator.validate(email)
      || email === ''
      || !isChecked
      || name === ''
      || lastName === ''
    ) {
      console.log({
        userType: type,
        email,
        message,
        name,
        lastName,
      });
      setIsError(true);
      return setShowPopup(true);
    }
    setIsError(false);
    setShowPopup(true);

    const mailData = {
      userType: type,
      email,
      message,
      name,
      lastName,
    };

    // const response = await axios.post(PHP_URL, mailData);
    console.log(mailData);
  };

  return (
    <div className="form-section">
      <h2>
        Do you see a need to disrupt broadcasting?
        We would love to empower you!
      </h2>
      <form className="form-frame">
        <div className="form-frame-box">
          <h4>Radio Waves Are Open</h4>
          {window.innerWidth <= 450 ? (
            <>
              <Input
                type="string"
                className="margin-r"
                title="First name"
                placeholder="First name"
                setItem={setName}
              />
              <Input
                type="string"
                title="Last name"
                placeholder="Last name"
                setItem={setLastName}
              />
            </>
          )
            : (
              <div className="group-inputs">
                <Input
                  type="string"
                  className="margin-r"
                  title="First name"
                  placeholder="First name"
                  setItem={setName}
                />
                <Input
                  type="string"
                  title="Last name"
                  placeholder="Last name"
                  setItem={setLastName}
                />
              </div>
            )}

          <Input
            type="dropdown"
            title="User type"
            placeholder="Interest"
            itemsForDropdown={itemsForDropdown}
            setItem={setType}
          />
          <Input
            title="Email"
            placeholder="you@.com"
            setIsError={setIsError}
            setItem={setEmail}
          />
          <Input
            type="text-area"
            title="Message"
            height={125}
            setItem={setMessage}
          />
          <Checkbox setIsChecked={setIsChecked} isChecked={isChecked} />
          <div className="center">
            <button
              className="btn btn-sizing"
              type="button"
              onClick={() => {
                checkBeforeMailSend();
                setShowPopup(true);
              }}
            >
              <span>Send</span>
            </button>
          </div>
          {showPopup && (
            <div className="success-popup">
              <img src={isError ? '/assets/icons/error.svg' : '/assets/icons/success.svg'} alt="icon" />
              <p>{isError ? 'OPS! Something went wrong' : 'EPIC! WE WILL BE IN TOUCH'}</p>
              <button
                className="btn popup-btn"
                type="button"
                onClick={() =>
                  setShowPopup(false)}
              >
                <span>{isError ? 'Try again' : 'Great!'}</span>
              </button>
            </div>
          )}
        </div>
        <Logo className="first-logo" size={40} />
        <Logo className="second-logo" size={30} />
        <Logo className="third-logo" size={20} />
      </form>
    </div>
  );
};

export default FormSection;
