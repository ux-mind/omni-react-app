import './changingLifeSection.scss';
import Logo from '../../../assets/Logo.jsx';

const ChangingLifeSection = () => (
  <div className="changingLife-section">
    <h2>
      We’re changing the game - with OMNI,
      there are infinite voices to select from
      infinite voices and infinite possibilities!
    </h2>
    <div className="changingLife-section-container">
      <div className="img-box">
        <div className="logos-box">
          <Logo size={40} />
          <Logo size={56} />
        </div>
        <img src="/src/assets/phones/phone_1.png" alt="phone1 img" />
      </div>
      <div className="title-box">
        <p>ANYONE CAN CREATE, SHARE, LISTEN AND, MONETIZE ANY EXPERIENCE, ANYTIME.</p>
      </div>
    </div>
  </div>
);

export default ChangingLifeSection;
