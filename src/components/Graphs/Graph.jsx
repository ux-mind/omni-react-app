import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Graph = ({ colorNumber, percentage, height }) => {
  const [newHeight, setNewHeight] = useState(height);

  useEffect(() => {
    if (window.screen.width <= 870) {
      setNewHeight(newHeight * 0.66);
    }
  }, []);
  return (
    <div className="graph-box">
      <span>
        {percentage}
        %
      </span>
      <div style={{ height: `${newHeight}px` }} className={`graph ${colorNumber === 1 ? 'blue' : 'purple'}`} />
    </div>
  );
};

Graph.propTypes = {
  colorNumber: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Graph;
