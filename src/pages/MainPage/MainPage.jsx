import './mainPage.scss';
import React, { Suspense } from 'react';

const MainSection = React.lazy(() => import('./MainSection/MainSection.jsx'));
const GraphicSection = React.lazy(() => import('./GraphicSection/GraphicSection.jsx'));
const WorldBGSection = React.lazy(() => import('./WorldBGSection/WorldBGSection.jsx'));
const FacilitiesSection = React.lazy(() => import('./FacilitiesSection/FacilitiesSection.jsx'));
const ChangingLifeSection = React.lazy(() => import('./ChangingLifeSection/ChangingLifeSection.jsx'));
const FutureSection = React.lazy(() => import('./FutureSection/FutureSection.jsx'));
const MemoriesSection = React.lazy(() => import('./MemoriesSection/MemoriesSection.jsx'));
const ControlSection = React.lazy(() => import('./ControlSection/ControlSection.jsx'));
const ExperienceSection = React.lazy(() => import('./ExperienceSection/ExperienceSection.jsx'));
const BubblehouseSection = React.lazy(() => import('./BubblehouseSection/BubblehouseSection.jsx'));
const FormSection = React.lazy(() => import('./FormSection/FormSection.jsx'));
const PhoneOnlySection = React.lazy(() => import('./PhoneOnlySection/PhoneOnlySection.jsx'));
const DiversitySection = React.lazy(() => import('./DiversitySection/DiversitySection.jsx'));

const MainPage = () => (
  <main>
    <Suspense>
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
    </Suspense>
  </main>
);

export default MainPage;
