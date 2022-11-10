import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ title, className = '' }) => (
  <button className={`btn ${className}`} type="button">
    <span>{title}</span>
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
};

export default Button;
