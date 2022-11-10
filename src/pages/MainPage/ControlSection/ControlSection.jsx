import './controlSection.scss';
import Logo from '../../../assets/Logo.jsx';

const ControlSection = () => (
  <div className="control-section">
    <h2>
      Omni keeps the fun going long after the first broadcast
      <br />
      Create station subscriptions and engage with your fans
    </h2>
    <div className="control-section-container">
      <div className="control-text-box">
        <h3>
          YOUR VOICE IS UNIQUE AND VALUABLE
        </h3>
        <p>
          Bring your perspective to life, and build your audio brand with the Professional Station
        </p>
        <p>
          Set your Station to Public, and start
          <br />
          Subscribing your Listeners.
        </p>
        <h3>OMNI - LIMITLESS AUDIO EVERYONE KNOWS YOUR VOICE</h3>
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
