import './phoneOnlySection.scss';
import Logo from '../../../assets/Logo.jsx';

const PhoneOnlySection = () => (
  <div className="phoneOnly-section">
    <div className="phoneOnly-section-background">
      <div className="phoneOnly-section-container">
        <Logo size="20" className="logo left-first" />
        <Logo size="30" className="logo left-second" />
        <Logo size="40" className="logo left-third" />
        <Logo size="56" className="logo left-fourth" />
        <img src="/src/assets/phones/phone_5.png" alt="phone 5" />
        <Logo size="20" className="logo right-first" />
        <Logo size="30" className="logo right-second" />
        <Logo size="40" className="logo right-third" />
        <Logo size="56" className="logo right-fourth" />
      </div>
    </div>
  </div>
);

export default PhoneOnlySection;
