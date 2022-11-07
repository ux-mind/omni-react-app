import './bubblehouseSection.scss';
import Logo from '../../../assets/Logo.jsx';

const BubblehouseSection = () => (
  <div className="bubblehouse-section">
    <div className="background">
      <div className="bubblehouse-section-container">
        <div className="text-box">
          <img width={121} height={121} src="/src/assets/images/coin.png" alt="coin" />
          <h3>
            THE EXPERIENCE DOESN&apos;T STOP WITH THE END OF THE BROADCAST!
            OMNI ENABLES CREATORS AND LISTENERS TO CONTINUE THE EXPERIENCE
          </h3>
          <span>Bubblehouse</span>
          <p>Be the first, but never the last with the OMNI NFT marketplace</p>
        </div>
        <div className="cards-box">
          <div className="cards-frame">
            <div className="bubble-title">
              <img src="/src/assets/bubble_logo.svg" alt="Bubblehouse logo" />
              <h5>bubblehouse</h5>
            </div>
            <img className="first-card" src="/src/assets/images/card_1.png" alt="Card 1" />
            <img className="second-card" src="/src/assets/images/card_2.png" alt="Card 2" />

            <Logo className="first-logo" size={55} />
            <Logo className="second-logo" size={40} />
            <Logo className="third-logo" size={30} />
            <Logo className="fourth-logo" size={20} />
          </div>
          <div className="arrows-box">
            <img id="left-arrow" src="/src/assets/arrow.svg" alt="left-arrow" />
            <img id="right-arrow" src="/src/assets/arrow.svg" alt="right-arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BubblehouseSection;
