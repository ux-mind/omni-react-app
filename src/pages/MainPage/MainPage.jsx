import './mainPage.scss';
import MainSection from './MainSection/MainSection.jsx';
import GraphicSection from './GraphicSection/GraphicSection.jsx';
import WorldBGSection from './WorldBGSection/WorldBGSection.jsx';
import FacilitiesSection from './FacilitiesSection/FacilitiesSection.jsx';
import ChangingLifeSection from './ChangingLifeSection/ChangingLifeSection.jsx';

const MainPage = () => (
  <main>
    <MainSection />
    <GraphicSection />
    <WorldBGSection />
    <FacilitiesSection />
    <ChangingLifeSection />
  </main>
);

export default MainPage;
