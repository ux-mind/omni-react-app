import './counter.scss';
import { useEffect, useState } from 'react';
import CounterField from './CounterField/CounterField.jsx';
import Separator from './Separator/Separator.jsx';

const Counter = () => {
  const [dateCount, setDateCount] = useState({
    days: 5,
    hours: 19,
    minutes: 38,
  });
  const [prevDateCount, setPrevDateCount] = useState(dateCount);

  const countDate = () => {
    setDateCount((prev) => {
      let { days, hours, minutes } = prev;

      if (minutes !== 0) {
        minutes--;
      } else if (hours !== 0) {
        hours--;
        minutes = 60;
      } else if (days !== 0) {
        days--;
        hours = 24;
        minutes = 60;
      }

      return { days, hours, minutes };
    });
  };

  useEffect(() => {
    const counterDate = setInterval(countDate, 60000);

    return () => clearInterval(counterDate);
  }, []);

  return (
    <div className="counter">
      <p>Launching in:</p>
      <div className="counter-box">
        <CounterField
          title="DAYS"
          prevNumber={prevDateCount.days}
          number={dateCount.days}
          changePrev={setPrevDateCount}
        />
        <Separator />
        <CounterField
          title="HOURS"
          prevNumber={prevDateCount.hours}
          number={dateCount.hours}
          changePrev={setPrevDateCount}
        />
        <Separator />
        <CounterField
          title="MINUTES"
          prevNumber={prevDateCount.minutes}
          number={dateCount.minutes}
          changePrev={setPrevDateCount}
        />
      </div>
    </div>
  );
};

export default Counter;
