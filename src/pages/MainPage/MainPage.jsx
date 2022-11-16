import './mainPage.scss';
import { lazy, Suspense } from 'react';

const MainSection = lazy(() => import('./MainSection/MainSection.jsx'));
const GraphicSection = lazy(() => import('./GraphicSection/GraphicSection.jsx'));
const WorldBGSection = lazy(() => import('./WorldBGSection/WorldBGSection.jsx'));
const FacilitiesSection = lazy(() => import('./FacilitiesSection/FacilitiesSection.jsx'));
const ChangingLifeSection = lazy(() => import('./ChangingLifeSection/ChangingLifeSection.jsx'));
const FutureSection = lazy(() => import('./FutureSection/FutureSection.jsx'));
const MemoriesSection = lazy(() => import('./MemoriesSection/MemoriesSection.jsx'));
const ControlSection = lazy(() => import('./ControlSection/ControlSection.jsx'));
const ExperienceSection = lazy(() => import('./ExperienceSection/ExperienceSection.jsx'));
const BubblehouseSection = lazy(() => import('./BubblehouseSection/BubblehouseSection.jsx'));
const FormSection = lazy(() => import('./FormSection/FormSection.jsx'));
const PhoneOnlySection = lazy(() => import('./PhoneOnlySection/PhoneOnlySection.jsx'));
const DiversitySection = lazy(() => import('./DiversitySection/DiversitySection.jsx'));

const MainPage = () => (
  <main>
    <Suspense>
      //animated
      <MainSection />
      <GraphicSection />
      <WorldBGSection />
      <FacilitiesSection />
      <ChangingLifeSection />
      <FutureSection />
      //animated
      <MemoriesSection />
      <ControlSection />
      <ExperienceSection />
      <BubblehouseSection />
      <FormSection />
      <PhoneOnlySection />
      <DiversitySection />
    </Suspense>
  </main>
);

export default MainPage;
