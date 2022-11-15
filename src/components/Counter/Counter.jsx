import './counter.scss';
import { useEffect, useState } from 'react';
import moment from 'moment';
import CounterField from './CounterField/CounterField.jsx';
import Separator from './Separator/Separator.jsx';

const countTime = () => {
  const dateNow = moment().utcOffset('-05:00').format();
  const dateEnd = moment('2022-11-21T12:55:00+03:00');

  return {
    days: dateEnd.diff(dateNow, 'days'),
    hours: dateEnd.diff(dateNow, 'hours') % 24,
    minutes: dateEnd.diff(dateNow, 'minutes') % 60,
  };
};

const Counter = () => {
  const [dateCount, setDateCount] = useState(countTime());
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
