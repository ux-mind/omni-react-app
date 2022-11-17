import './dropdownInput.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const DropdownInput = ({ title, placeholder, items, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(placeholder);

  return (
    <>
      <input
        id="dropdown"
        style={{ height: `${height}px` }}
        type="input"
        name={title}
        value={value}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      <img
        style={{ rotate: isOpen && '180deg' }}
        className="dropdown-arrow"
        src="/assets/icons/little_arrow.svg"
        alt="arrow"
      />
      {isOpen && (
        <div className="dropdown-items">
          {items.map((item, id) => (
            <div
              key={item.id}
              className="item"
              onClick={() => {
                setValue(items[id].title);
                setIsOpen(false);
              }}
            >
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

DropdownInput.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/require-default-props,react/forbid-prop-types
  items: PropTypes.array.isRequired,
  // eslint-disable-next-line react/require-default-props
  height: PropTypes.number,
};

export default DropdownInput;
