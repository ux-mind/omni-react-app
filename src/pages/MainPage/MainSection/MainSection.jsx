import './mainSection.scss';
import Button from '../../../components/Button/Button.jsx';

const MainSection = () => (
  <div className="main-section">
    <div className="main-section-container">
      <p>Diversity of voice, freedom of choice - The OMNI way.</p>
      <h1>
        AUGMENTED AUDIO BRINGING RADIO
        <br />
        INTO THE 21ST CENTURY
      </h1>
      <p>
        Join the audio revolution!
      </p>
      <Button className="main-section-btn" title="radio us" />
    </div>
  </div>
);

export default MainSection;
