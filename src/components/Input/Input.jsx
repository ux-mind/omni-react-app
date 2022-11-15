import './input.scss';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import * as EmailValidator from 'email-validator';
import DropdownInput from './DropdownInput/DropdownInput.jsx';

const Input = ({ className, title, placeholder, type = 'input', itemsForDropdown, height }) => {
  const [email, setEmail] = useState('');
  const emailRef = useRef();

  const checkEmail = (email) => {
    if (!EmailValidator.validate(email) && email !== '') {
      if (!emailRef.current.classList.contains('error-input')) return emailRef.current.classList.add('error-input');
      return;
    }

    if (emailRef.current.classList.contains('error-input')) emailRef.current.classList.remove('error-input');
  };

  return (
    <div className={`input-box ${className}`}>
      <span>{title}</span>
      <div
        style={{ height: `${height}px`, zIndex: type === 'dropdown' ? 1 : 0 }}
        className="input-frame"
        ref={emailRef}
      >
        {/* eslint-disable-next-line no-nested-ternary */}
        {type === 'input' ? (
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => checkEmail(email)}
            style={{ height: `${height}px` }}
            type="text"
            name={title}
            placeholder={placeholder}
          />
        )
          // eslint-disable-next-line no-nested-ternary
          : type === 'text-area' ? (
            <textarea
              style={{ height: `${height - 30}px` }}
              name="title"
              cols="80"
              rows="7"
            />
          )
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
};
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
