import './mainPage.scss';
import MainSection from './MainSection/MainSection.jsx';
import GraphicSection from './GraphicSection/GraphicSection.jsx';
import WorldBGSection from './WorldBGSection/WorldBGSection.jsx';
import FacilitiesSection from './FacilitiesSection/FacilitiesSection.jsx';
import ChangingLifeSection from './ChangingLifeSection/ChangingLifeSection.jsx';
import FutureSection from './FutureSection/FutureSection.jsx';
import MemoriesSection from './MemoriesSection/MemoriesSection.jsx';
import ControlSection from './ControlSection/ControlSection.jsx';
import ExperienceSection from './ExperienceSection/ExperienceSection.jsx';

const MainPage = () => (
  <main>
    <MainSection />
    <GraphicSection />
    <WorldBGSection />
    <FacilitiesSection />
    <ChangingLifeSection />
    <FutureSection />
    <MemoriesSection />
    <ControlSection />
    <ExperienceSection />
  </main>
);

export default MainPage;
