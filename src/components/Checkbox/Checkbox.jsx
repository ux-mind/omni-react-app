import './checkbox.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Checkbox = ({ isChecked, setIsChecked, className }) => (
  <div className={`checkbox-input ${className}`}>
    <div className="personal-checkbox" onClick={() => setIsChecked(!isChecked)}>
      {isChecked && <img src="/src/assets/icons/checkIcon.svg" alt="check" />}
    </div>
    <p>
      You agree to our friendly&nbsp;
      <Link to="/">
        privacy policy.
      </Link>
    </p>
  </div>
);

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
};
export default Checkbox;
