import './counter.scss';
import { useEffect, useMemo, useState } from 'react';
import CounterField from './CounterField/CounterField.jsx';
import Separator from './Separator/Separator.jsx';

const Counter = () => {
  const countTimeMemo = useMemo(() => {
    const startDate = new Date();
    const endDate = new Date(Date.UTC(2022, 10, 21, 12, 55, 0));
    const diff = (endDate.getTime() - (5 * 3600 * 1000)) - startDate.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };

    return {
      days: Math.trunc(diff / (1000 * 3600 * 24)),
      hours: Math.trunc(diff / (1000 * 3600)) % 24,
      minutes: Math.trunc(diff / (1000 * 60)) % 60,
    };
  }, []);

  const [dateCount, setDateCount] = useState(countTimeMemo);
  const [prevDateCount, setPrevDateCount] = useState(dateCount);

  const countDate = () => {
    setDateCount((prev) => {
      let { days, hours, minutes } = prev;

      if (days <= 0 && hours <= 0 && minutes <= 0) return { days: 0, hours: 0, minutes: 0 };

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
    const { days, hours, minutes } = dateCount;
    if (days === 0 && hours === 0 && minutes === 0) return;

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
