import './experienceSection.scss';
import Logo from '../../../assets/Logo.jsx';

const ExperienceSection = () => (
  <div className="experience-section">
    <div className="experience-section-container">
      <div className="img-box">
        <div className="logos-box">
          <Logo size={40} className="first-logo" />
          <Logo size={56} className="second-logo" />
          <Logo size={40} className="third-logo" />
          <Logo size={56} className="fourth-logo" />
        </div>
        <img src="/src/assets/phones/phone_4.png" alt="phone1 img" loading="lazy" />
      </div>
      <div className="text-box">
        <h3>
          THE EXPERIENCE DOESN&apos;T STOP
          <br />
          WITH THE END OF THE BROADCAST!
          OMNI ENABLES CREATORS AND LISTENERS TO CONTINUE THE EXPERIENCE
        </h3>
        <p>
          Never be left on the sidelines again. OMNI is giving everyone the VIP experience.
        </p>
      </div>
    </div>
  </div>
);

export default ExperienceSection;
