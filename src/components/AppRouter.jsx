import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';

function AppRouter() {
  return (
    <Routes>
      {routes.map((({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
          exact
        />
      )
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
