import './input.scss';
import PropTypes from 'prop-types';

const Input = ({ title, placeholder, type = 'input', itemsForDropdown, height }) => (
  <div className="input-box">
    <span>{title}</span>
    <div style={{ height: `${height}px` }} className="input-frame">
      {/* eslint-disable-next-line no-nested-ternary */}
      {type === 'input' ?
        <input style={{ height: `${height}px` }} type="text" name={title} placeholder={placeholder} />
        // eslint-disable-next-line no-nested-ternary
        : type === 'text-area' ?
          <textarea style={{ height: `${height - 30}px` }} name="title" cols="80" rows="7" />
          : type === 'checkbox' ?
            <input style={{ height: `${height}px` }} type="input" name={title} placeholder={placeholder} />
            : (
              <>
                <input style={{ height: `${height}px` }} type="input" name={title} placeholder={placeholder} />
                <div className="dropdown-items">
                  {itemsForDropdown.map(({ id, title }) => (
                    <div key={id} className="item">
                      <p>{title}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
    </div>
  </div>
);

Input.propTypes = {
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
