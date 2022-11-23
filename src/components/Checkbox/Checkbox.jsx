import './checkbox.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ isChecked, setIsChecked, className }) => (
  <div className={`checkbox-input ${className}`}>
    <div className="personal-checkbox" onClick={() => setIsChecked(!isChecked)}>
      {isChecked && <img src="/assets/icons/checkIcon.svg" alt="check" />}
    </div>
    <p>
      You agree to our friendly&nbsp;
      <a style={{ position: 'relative' }} href={import.meta.env.VITE_SOME_PRIVACY_POLICY_URL || '/'} target="_blank" rel="noreferrer">
        privacy policy.
      </a>
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
