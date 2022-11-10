import './notFoundPage.scss';
import Button from '../../components/Button/Button.jsx';

const NotFoundPage = () => (
  <main className="notFound-section">
    <div className="notFound-background">
      <span className="text-style notFound-section-number">404</span>
      <p className="text-style notFound-section-info">Page not found</p>
      <Button className="notFound-section-btn" title="Go to home page" />
    </div>
  </main>
);

export default NotFoundPage;
