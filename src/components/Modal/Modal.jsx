import './modal.scss';
import PropTypes from 'prop-types';

const Modal = ({ text, btnText, isOpened, setIsOpened }) => (
  <div className={`modal ${isOpened ? 'modal_opened' : ''}`}>
    <div className="modal-wrapper">
      <img
        width="72"
        height="72"
        src="/assets/images/success.svg"
        alt="success"
      />
      <p>{text}</p>
      <button
        className="modal-btn"
        type="button"
        aria-label="close"
        onClick={() => setIsOpened(false)}
      >
        {btnText}
      </button>
    </div>
  </div>
);

Modal.propTypes = {
  // eslint-disable-next-line react/require-default-props
  setIsOpened: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  isOpened: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  text: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  btnText: PropTypes.string,
};

export default Modal;
