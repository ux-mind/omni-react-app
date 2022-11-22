import './counterField.scss';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

/* eslint-disable react/no-string-refs */
const CounterField = ({ title, prevNumber, number, changePrev }) => {
  const myRef = useRef(null);
  const myRef2 = useRef(null);

  useEffect(() => {
    myRef.current.className += ' field-animate-top';
    myRef2.current.className += ' field-animate-bottom';

    setTimeout(() => {
      changePrev((prev) => ({ ...prev, [title.toLowerCase()]: number }));
    }, 260);

    setTimeout(() => {
      const topField = myRef.current.className.split(' ');
      const bottomField = myRef2.current.className.split(' ');

      myRef.current.className = `${topField[0]} ${topField[1]}`;
      myRef2.current.className = `${bottomField[0]} ${bottomField[1]}`;
    }, 1000);
  }, [number]);

  return (
    <div className="counter-field">
      <div className="field-box">
        <div ref={myRef} className="field field-top">
          <span>{number}</span>
          <div className="dot-big field-top-dot-big-first" />
          <div className="dot-big field-top-dot-big-second" />
          <div className="dot field-top-dot-first" />
          <div className="dot field-top-dot-second" />
        </div>
        <div ref={myRef2} className="field field-bottom">
          <div className="dot-big field-bottom-dot-big-first" />
          <div className="dot-big field-bottom-dot-big-second" />
          <div className="dot field-bottom-dot-first" />
          <div className="dot field-bottom-dot-second" />
          <span>{prevNumber}</span>
        </div>
      </div>
      <span>{title}</span>
    </div>
  );
};

CounterField.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  prevNumber: PropTypes.number.isRequired,
  changePrev: PropTypes.func.isRequired,
};

export default CounterField;
