import './input.scss';
import PropTypes from 'prop-types';
import DropdownInput from './DropdownInput/DropdownInput.jsx';

const Input = ({ className, title, placeholder, type = 'input', itemsForDropdown, height }) => (
  <div className={`input-box ${className}`}>
    <span>{title}</span>
    <div style={{ height: `${height}px`, zIndex: type === 'dropdown' ? 1 : 0 }} className="input-frame">
      {/* eslint-disable-next-line no-nested-ternary */}
      {type === 'input' ?
        <input style={{ height: `${height}px` }} type="text" name={title} placeholder={placeholder} className="input-bg" />
        // eslint-disable-next-line no-nested-ternary
        : type === 'text-area' ?
          <textarea style={{ height: `${height - 30}px` }} name="title" cols="80" rows="7" />
          : (
            <DropdownInput
              items={itemsForDropdown}
              title={title}
              placeholder={placeholder}
              height={height}
            />
          )}
    </div>
  </div>
);

Input.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.string,
  // eslint-disable-next-line react/require-default-props,react/forbid-prop-types
  itemsForDropdown: PropTypes.array,
  // eslint-disable-next-line react/require-default-props
  height: PropTypes.number,
};

export default Input;
