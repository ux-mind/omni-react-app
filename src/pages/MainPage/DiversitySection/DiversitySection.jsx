import './diversitySection.scss';
import Button from '../../../components/Button/Button.jsx';
import { COMING_SOON_ROUTE } from '../../../utils/constants.js';

const DiversitySection = () => (
  <div className="diversity-section">
    <h2>
      DIVERSITY OF VOICE
      FREEDOM OF CHOICE
      THE OMNI WAY
    </h2>
    <p>Join the game and start a broadcast</p>
    <Button title="Download app" link={COMING_SOON_ROUTE} />
  </div>
);

export default DiversitySection;
