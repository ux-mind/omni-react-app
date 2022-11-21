import './mainPage.scss';
import MainSection from './MainSection/MainSection.jsx';
import GraphicSection from './GraphicSection/GraphicSection.jsx';
import WorldBGSection from './WorldBGSection/WorldBGSection.jsx';
import FacilitiesSection from './FacilitiesSection/FacilitiesSection.jsx';
import ChangingLifeSection from './ChangingLifeSection/ChangingLifeSection.jsx';
import FutureSection from './FutureSection/FutureSection.jsx';
import ControlSection from './ControlSection/ControlSection.jsx';
import ExperienceSection from './ExperienceSection/ExperienceSection.jsx';
import BubblehouseSection from './BubblehouseSection/BubblehouseSection.jsx';
import FormSection from './FormSection/FormSection.jsx';
import PhoneOnlySection from './PhoneOnlySection/PhoneOnlySection.jsx';
import DiversitySection from './DiversitySection/DiversitySection.jsx';
import MemoriesSection from './MemoriesSection/MemoriesSection.jsx';

// const MainSection = lazy(() => import('./MainSection/MainSection.jsx'));
// const GraphicSection = lazy(() => import('./GraphicSection/GraphicSection.jsx'));
// const WorldBGSection = lazy(() => import('./WorldBGSection/WorldBGSection.jsx'));
// const FacilitiesSection = lazy(() => import('./FacilitiesSection/FacilitiesSection.jsx'));
// const ChangingLifeSection = lazy(() => import('./ChangingLifeSection/ChangingLifeSection.jsx'));
// const FutureSection = lazy(() => import('./FutureSection/FutureSection.jsx'));
// const MemoriesSection = lazy(() => import('./MemoriesSection/MemoriesSection.jsx'));
// const ControlSection = lazy(() => import('./ControlSection/ControlSection.jsx'));
// const ExperienceSection = lazy(() => import('./ExperienceSection/ExperienceSection.jsx'));
// const BubblehouseSection = lazy(() => import('./BubblehouseSection/BubblehouseSection.jsx'));
// const FormSection = lazy(() => import('./FormSection/FormSection.jsx'));
// const PhoneOnlySection = lazy(() => import('./PhoneOnlySection/PhoneOnlySection.jsx'));
// const DiversitySection = lazy(() => import('./DiversitySection/DiversitySection.jsx'));

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
    <BubblehouseSection />
    <FormSection />
    <PhoneOnlySection />
    <DiversitySection />
  </main>
);

export default MainPage;
