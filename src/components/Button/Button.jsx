import PropTypes from 'prop-types';
import './button.scss';
import { Link } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/constants.js';

const Button = ({
  title,
  className = '',
  link = MAIN_ROUTE,
  type,
  onClick,
}) => {
  if (type === 'button') {
    return (
      <button className={`btn ${className}`} type="button" onClick={onClick}>
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
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
};

export default Button;
