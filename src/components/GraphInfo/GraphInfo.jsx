import './graphInfo.scss';
import PropTypes from 'prop-types';

const GraphInfo = ({ colorNumber, title }) => (
  <div className="graph-info-box">
    <div className={`color-box ${colorNumber === 1 ? 'blue' : 'purple'}`} />
    <p>{title}</p>
  </div>
);

GraphInfo.propTypes = {
  colorNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default GraphInfo;
