import './experienceSection.scss';
import Logo from '../../../assetsJSX/Logo.jsx';

const ExperienceSection = () => (
  <div className="experience-section">
    <h2>
      The listener experience doesn&apos;t stop with the end of the broadcast
      <br />
      OMNI keeps the fun going long after the first broadcast
    </h2>
    <div className="experience-section-container">
      <div className="img-box">
        <div className="logos-box">
          <Logo size={40} className="first-logo" />
          <Logo size={56} className="second-logo" />
          <Logo size={40} className="third-logo" />
          <Logo size={56} className="fourth-logo" />
        </div>
        <img src="/assets/phones/phone_4.png" alt="phone1 img" loading="lazy" />
      </div>
      <div className="text-box">
        <h3>
          RELIVE AND REPLAY CURATED REELS
        </h3>
        <p>
          Step back in time and hear your favorite Moments.
          Quickly share your curated Highlight Reels.
          <br />
          Easily Subscribe to and Engage with the Broadcaster.
        </p>
        <h3>
          NEVER BE LEFT ON THE SIDELINES AGAIN.
          <br />
          OMNI -  EVERYONE IS A VIP
        </h3>
      </div>
    </div>
  </div>
);

export default ExperienceSection;
