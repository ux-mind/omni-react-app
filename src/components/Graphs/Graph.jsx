import PropTypes from 'prop-types';

const Graph = ({ colorNumber, percentage, height }) => (
  <div className="graph-box">
    <span>
      {percentage}
      %
    </span>
    <div
      style={{ height: `${window.innerWidth <= 870 ? height * 0.66 : height}px` }}
      className={`graph ${colorNumber === 1 ? 'blue' : 'purple'}`}
    />
  </div>
);

Graph.propTypes = {
  colorNumber: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Graph;
