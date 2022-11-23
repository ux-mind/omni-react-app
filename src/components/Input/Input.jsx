import './input.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import * as EmailValidator from 'email-validator';
import DropdownInput from './DropdownInput/DropdownInput.jsx';

const Input = ({
  className,
  title,
  placeholder,
  type = 'input',
  itemsForDropdown,
  height,
  setItem,
}) => {
  const [email, setEmail] = useState('');
  const [string, setString] = useState('');
  const [message, setMessage] = useState('');
  const [highlightError, setHighlightError] = useState(false);

  const setErrorStyle = () => {
    if (string === '') {
      return setHighlightError(true);
    }

    setHighlightError(false);
  };

  const setErrorStyleMessage = () => {
    if (message === '') {
      return setHighlightError(true);
    }

    setHighlightError(false);
  };

  const checkEmail = (email) => {
    if (!EmailValidator.validate(email) || email === '') {
      return setHighlightError(true);
    }

    setHighlightError(false);
  };

  return (
    <div style={{ position: 'relative' }} className={`input-box ${className}`}>
      <span>{title}</span>
      <div
        style={{ height: `${height}px`, zIndex: type === 'dropdown' ? 1 : 0 }}
        className={`input-frame ${highlightError ? 'error-input' : ''}`}
      >
        {/* eslint-disable-next-line no-nested-ternary */}
        {type === 'input' ? (
          <>
            <input
              value={email}
              onChange={(e) => {
                setItem(e.target.value);
                setEmail(e.target.value);
              }}
              onBlur={() => checkEmail(email)}
              style={{ height: `${height}px` }}
              type="text"
              name={title}
              placeholder={placeholder}
            />
            {highlightError && (
              <div className="error-span">
                <img style={{ display: 'block' }} width={10} height={10} src="public/assets/icons/error.svg" alt="" />
                <span>Incorrect email address</span>
              </div>
            )}
          </>
        )
          // eslint-disable-next-line no-nested-ternary
          : type === 'string' ? (
            <>
              <input
                value={string}
                onChange={(e) => {
                  setItem(e.target.value);
                  setString(e.target.value);
                }}
                onBlur={() => setErrorStyle()}
                style={{ height: `${height}px` }}
                type="text"
                name={title}
                placeholder={placeholder}
              />
              {highlightError && (
                <div className="error-span">
                  <img style={{ display: 'block' }} width={10} height={10} src="public/assets/icons/error.svg" alt="" />
                  <span>
                    Incorrect&nbsp;
                    {placeholder}
                  </span>
                </div>
              )}
            </>
          )
          // eslint-disable-next-line no-nested-ternary
            : type === 'text-area' ? (
              <>
                <textarea
                  style={{ height: `${height - 30}px` }}
                  value={message}
                  onChange={(e) => {
                    setItem(e.target.value);
                    setMessage(e.target.value);
                  }}
                  onBlur={() => setErrorStyleMessage()}
                  name="title"
                  cols="80"
                  rows="7"
                />
                {highlightError && (
                  <div className="error-span">
                    <img style={{ display: 'block' }} width={10} height={10} src="public/assets/icons/error.svg" alt="" />
                    <span>
                      Fill message please
                    </span>
                  </div>
                )}
              </>
            )
              : (
                <DropdownInput
                  items={itemsForDropdown}
                  title={title}
                  placeholder={placeholder}
                  height={height}
                  setItem={setItem}
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
  // eslint-disable-next-line react/require-default-props
  setIsError: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  setItem: PropTypes.func,
};

export default Input;
