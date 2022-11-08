import './formSection.scss';
import Logo from '../../../assets/Logo.jsx';
import Input from '../../../components/Input/Input.jsx';

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
    title: 'Partnering',
  },
];

const FormSection = () => (
  <div className="form-section">
    <h2>
      Do you see a need to disrupt broadcasting?
      We would love to empower you!
    </h2>
    <div className="form-frame">
      <div className="form-frame-box">
        <h4>Radio Waves Are Open</h4>
        <div className="group-inputs">
          <Input title="First name" placeholder="First name" />
          <Input title="Last name" placeholder="Last name" />
        </div>
        <Input type="dropdown" title="User type" placeholder="Interest" itemsForDropdown={itemsForDropdown} />
        <Input title="Email" placeholder="you@.com" />
        <Input type="text-area" title="Message" height={125} />
      </div>
      <Logo className="first-logo" size={40} />
      <Logo className="second-logo" size={30} />
      <Logo className="third-logo" size={20} />
    </div>
  </div>
);

export default FormSection;
