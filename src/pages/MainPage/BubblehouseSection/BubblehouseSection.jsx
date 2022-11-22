import './bubblehouseSection.scss';
import Logo from '../../../assetsJSX/Logo.jsx';

const BubblehouseSection = () => (
  <div className="bubblehouse-section">
    <h2>What the future holds</h2>
    <div className="background">
      <div className="bubblehouse-section-container">
        <div className="text-box">
          <h3>
            TURN YOUR AUDIO INTO AN NFT
          </h3>
          <p>From the broadcasts to the sound bites, your voice is valuable</p>
          <h3>
            OMNI, your personal marketplace.
            <br />
            Be the first, but never the last
          </h3>
        </div>
        <div className="cards-box">
          <div className="cards-frame">
            <img src="/assets/images/coin.png" alt="coin" />

            <Logo className="first-logo" size={55} />
            <Logo className="second-logo" size={40} />
            <Logo className="third-logo" size={30} />
            <Logo className="fourth-logo" size={20} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BubblehouseSection;
