import { MAIN_ROUTE } from './utils/constants';
import ComingSoonPage from './pages/ComingSoonPage/ComingSoonPage.jsx';

// Temproary change main rote to coming-soon
export default [
  {
    path: MAIN_ROUTE,
    Component: ComingSoonPage,
  },
  // {
  //   path: COMING_SOON_ROUTE,
  //   Component: MainPage,
  // },
];
