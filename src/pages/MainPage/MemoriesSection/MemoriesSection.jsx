import './memoriesSection.scss';
import Logo from '../../../assets/Logo.jsx';

const MemoriesSection = () => (
  <div className="memories-section">
    <h2>
      The most valuable memories are personal OMNI,
      <br />
      the free and open broadcast booth
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
        <h3>YOUR FAMILY&apos;S FOREVER STATION NEVER FORGET A VOICE AGAIN</h3>
        <p>
          OMNI gives every person the freedom to create a station,
          share it privately, and to save it for the next generation.
        </p>
        <h3>OMNI - TIMELESS AUDIO</h3>
      </div>
    </div>
  </div>
);

export default MemoriesSection;
