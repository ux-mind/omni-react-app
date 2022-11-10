import './memoriesSection.scss';
import Logo from '../../../assets/Logo.jsx';

const MemoriesSection = () => (
  <div className="memories-section">
    <h2>
      OMNI - timeless audio your family&apos;s forever station
      <br />
      OMNI, a free, open, and inclusive broadcast booth
    </h2>
    <div className="memories-section-container">
      <div className="img-box">
        <div className="logos-box">
          <Logo size={50} className="first-logo" />
          <Logo size={30} className="second-logo" />
          <Logo size={40} className="third-logo" />
          <Logo size={60} className="fourth-logo" />
        </div>
        <img src="/src/assets/phones/phone_2.png" alt="phone1 img" loading="lazy" />
      </div>
      <div className="text-box">
        <h3>NEVER FORGET A VOICE AGAIN</h3>
        <p>
          Everyone deserves the freedom to have their voice heard and preserved
        </p>
        <h3>
          OMNI - TIMELESS AUDIO
          <br />
          YOUR FAMILY&apos;S FORVER STATION
        </h3>
      </div>
    </div>
  </div>
);

export default MemoriesSection;
