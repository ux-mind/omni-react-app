import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ title, className }) => (
  <div className={`btn ${className}`}>
    <a href="/">{title}</a>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
};

export default Button;
