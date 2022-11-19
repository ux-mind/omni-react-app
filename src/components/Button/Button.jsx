import PropTypes from 'prop-types';
import './button.scss';
import { Link } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/constants.js';

const Button = ({ title, className = '', link = MAIN_ROUTE, type }) => {
  if (type === 'button' || type === 'submit') {
    return (
      <button
        className={`btn ${className}`}
        type={type === 'button' ? 'button' : 'submit'}
      >
        <span>{title}</span>
      </button>
    );
  }

  return (
    <button className={`btn ${className}`} type="button">
      <Link to={link}>
        <span>{title}</span>
      </Link>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  link: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.string,
};

export default Button;
