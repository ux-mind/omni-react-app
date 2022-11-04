import PropTypes from 'prop-types';
import Graph from './Graph.jsx';
import './graphs.scss';

const TwoGraphs = ({ percentages, heights }) => (
  <div className="two-graphs-box">
    <Graph percentage={percentages[0]} colorNumber={2} height={heights[0]} />
    <Graph percentage={percentages[1]} colorNumber={1} height={heights[1]} />
  </div>
);

TwoGraphs.propTypes = {
  /* eslint-disable */
  percentages: PropTypes.array.isRequired,
  heights: PropTypes.array.isRequired,
  /* eslint-disable */
};

export default TwoGraphs;
