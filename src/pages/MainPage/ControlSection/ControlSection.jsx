import './controlSection.scss';
import Logo from '../../../assets/Logo.jsx';

const ControlSection = () => (
  <div className="control-section">
    <h2>
      Control the subscriptions and engagements of each of your different stations.
      Allowing creators the freedom to engage with different segments of listeners
    </h2>
    <div className="control-section-container">
      <div className="control-text-box">
        <img className="control-coin" src="/src/assets/images/coin.png" alt="coin" />
        <p>
          CREATE STATION SUBSCRIPTIONS AND ENGAGE WITH YOUR FANS
          THERE&apos;S NO LIMIT TO THE NUMBER OF STATIONS YOU CAN CURATE
        </p>
      </div>
      <div className="control-img">
        <Logo size={20} className="first-logo" />
        <Logo size={40} className="second-logo" />
        <Logo size={56} className="third-logo" />
        <Logo size={56} className="fourth-logo" />
        <Logo size={40} className="fifth-logo" />
        <Logo size={20} className="sixth-logo" />
        <img src="/src/assets/phones/phone_3.png" alt="phone 3" />
      </div>
    </div>
  </div>
);

export default ControlSection;
