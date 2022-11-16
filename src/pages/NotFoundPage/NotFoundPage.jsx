import './notFoundPage.scss';
import Button from '../../components/Button/Button.jsx';
import { MAIN_ROUTE } from '../../utils/constants.js';

const NotFoundPage = () => (
  <main className="notFound-section">
    <div className="notFound-background">
      <span className="text-style notFound-section-number">404</span>
      <p className="text-style notFound-section-info">Page not found</p>
      <Button className="notFound-section-btn" title="Go to home page" link={MAIN_ROUTE} />
    </div>
  </main>
);

export default NotFoundPage;
