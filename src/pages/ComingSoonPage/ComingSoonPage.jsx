import './comingSoonPage.scss';
import { useState } from 'react';
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

const ComingSoonPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="comingSoon-section">
      <div className="comingSoon-box">
        <div className="comingSoon-box-left">
          <h2>The future of audio is coming</h2>
          <p>Send your request and we will answer you</p>
          <div className="form-frame">
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
            <Button className="btn-sizing" title="Send" />
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
