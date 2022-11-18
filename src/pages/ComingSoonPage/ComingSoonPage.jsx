import './comingSoonPage.scss';
import axios from 'axios';
import { useState, useRef } from 'react';
import Input from '../../components/Input/Input.jsx';
import Checkbox from '../../components/Checkbox/Checkbox.jsx';
import Button from '../../components/Button/Button.jsx';
import Counter from '../../components/Counter/Counter.jsx';

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

const PHP_URL = '../send.php';

const ComingSoonPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async () => {
    const form = formRef.current;

    if (form) {
      const inputs = [
        ...form.querySelectorAll('input'),
        ...form.querySelectorAll('textarea'),
      ];

      const data = {};

      inputs.forEach((input) => {
        const { value } = input;
        const name = input.name || 'undefined';

        data[name] = value;
      });

      await axios.post(PHP_URL, data);
    }
  };

  return (
    <main className="comingSoon-section">
      <div className="comingSoon-box">
        <div className="comingSoon-box-left">
          <h2>The future of audio is coming</h2>
          <p>Send your request and we will answer you</p>
          <div className="form-frame" ref={formRef}>
            <Input
              className="input-sizing"
              type="dropdown"
              title="User type"
              placeholder="Interest"
              itemsForDropdown={itemsForDropdown}
            />
            <Input
              className="input-sizing"
              title="Email"
              placeholder="you@.com"
            />
            <Input
              className="input-sizing"
              type="text-area"
              title="Message"
              height={125}
            />
            <Checkbox
              className="input-sizing checkbox"
              setIsChecked={setIsChecked}
              isChecked={isChecked}
            />
            <Button
              className="btn-sizing"
              title="Send"
              onClick={handleSubmit}
              type="button"
            />
          </div>
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
