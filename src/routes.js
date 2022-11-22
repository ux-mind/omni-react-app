import { MAIN_ROUTE, COMING_SOON_ROUTE } from './utils/constants';
import MainPage from './pages/MainPage/MainPage.jsx';
import ComingSoonPage from './pages/ComingSoonPage/ComingSoonPage.jsx';

export default [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: COMING_SOON_ROUTE,
    Component: ComingSoonPage,
  },
];
